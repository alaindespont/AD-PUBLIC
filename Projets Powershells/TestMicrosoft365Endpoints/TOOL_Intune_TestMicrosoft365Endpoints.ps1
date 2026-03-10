<#

.AUTHOR
	Alain Philip Despont / alain.despont@bechtle.com

.VERSION
	1.0

.RELEASE NOTES
	Version : 1.0 : Initial

.SYNOPSIS
    Script pour tester les endpoints 365.

.DESCRIPTION
    Le script peut etre appele tester le bon fonctionnement de certaines fonctions liés au cloud Microsoft 365.

.OUTPUTS
	Résultat dans la console directement

.SOURCE
    https://gist.github.com/shannonfritz/4c9f1cf800f3406729a58417639736f3
    Décembre 2024

#>


# WINDOWS 365 SERVICE
# MAJ : 19.02.2026
# https://learn.microsoft.com/en-us/windows-365/enterprise/requirements-network?tabs=enterprise%2Cent#windows-365-service
$endpoints_w365 = @(
    '*.infra.windows365.microsoft.com',
    'login.microsoftonline.com',
    'login.live.com',
    'enterpriseregistration.windows.net',
    'global.azure-devices-provisioning.net:443,5671',
    'hm-iot-in-prod-prap01.azure-devices.net:443,5671',
    'hm-iot-in-prod-prau01.azure-devices.net:443,5671',
    'hm-iot-in-prod-preu01.azure-devices.net:443,5671',
    'hm-iot-in-prod-prna01.azure-devices.net:443,5671',
    'hm-iot-in-prod-prna02.azure-devices.net:443,5671',
    'hm-iot-in-2-prod-preu01.azure-devices.net:443,5671',
    'hm-iot-in-2-prod-prna01.azure-devices.net:443,5671',
    'hm-iot-in-3-prod-preu01.azure-devices.net:443,5671',
    'hm-iot-in-3-prod-prna01.azure-devices.net:443,5671',
    'hm-iot-in-4-prod-prna01.azure-devices.net:443,5671'
)

# AZURE VIRTUAL DESKTOP
# MAJ : 19.02.2026
# https://learn.microsoft.com/en-us/azure/virtual-desktop/required-fqdn-endpoint?tabs=azure#remote-desktop-clients
#Session Host virtual machines
$endpoints_avd = @(
    'login.microsoftonline.com:443',
    '51.5.0.0/16:3478',
    '*.wvd.microsoft.com:443',
    'catalogartifact.azureedge.net:443',
    '*.prod.warm.ingest.monitor.core.windows.net:443',
    'gcs.prod.monitoring.core.windows.net:443',
    'azkms.core.windows.net:1688',
    'mrsglobalsteus2prod.blob.core.windows.net:443',
    'wvdportalstorageblob.blob.core.windows.net:443',
    '169.254.169.254:80',
    '168.63.129.16:80',
    'oneocsp.microsoft.com:80',
    'www.microsoft.com:80',
    '*.aikcertaia.microsoft.com:80',
    'azcsprodeusaikpublish.blob.core.windows.net:80',
    '*.microsoftaik.azure.net:80',
    'ctldl.windowsupdate.com:80',
    'aka.ms:443',
    '*.service.windows.cloud.microsoft:443',
    '*.windows.cloud.microsoft:443',
    '*.windows.static.microsoft:443'
    #Optionals
    'login.windows.net:443',
    '*.events.data.microsoft.com:443',
    'www.msftconnecttest.com:80',
    '*.prod.do.dsp.mp.microsoft.com:443',
    '*.sfx.ms:443',
    '*.digicert.com:80',
    '*.azure-dns.com:443',
    '*.azure-dns.net:443',
    '*eh.servicebus.windows.net:443'
)
#Seesion host End user devices
$endpoints_client = @(
    'login.microsoftonline.com:443',
    '*.wvd.microsoft.com:443',
    '*.servicebus.windows.net:443',
    'go.microsoft.com:443',
    'aka.ms:443',
    'learn.microsoft.com:443',
    'privacy.microsoft.com:443',
    '*.cdn.office.net:443',
    'graph.microsoft.com:443',
    'windows.cloud.microsoft:443',
    'windows365.microsoft.com:443',
    'ecs.office.com:443',
    '*.events.data.microsoft.com:443',
    '*.microsoftaik.azure.net:80',
    'www.microsoft.com:80',
    '*.aikcertaia.microsoft.com:80',
    'azcsprodeusaikpublish.blob.core.windows.net:80'
)

# MICROSOFT 365
# MAJ : 19.02.2026
# https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide

$endpoints_office365 = @(

    # =========================
    # Exchange Online
    # =========================
    'outlook.cloud.microsoft:80,443',
    'outlook.office.com:80,443',
    'outlook.office365.com:80,443',
    'smtp.office365.com:143,587,993,995',
    '*.outlook.com:80,443',
    'autodiscover.*.onmicrosoft.com:80,443',
    '*.protection.outlook.com:443',
    '*.mail.protection.outlook.com:25',
    '*.mx.microsoft:25',

    # =========================
    # Microsoft Teams
    # =========================
    '*.lync.com:80,443',
    '*.teams.cloud.microsoft:80,443',
    '*.teams.microsoft.com:80,443',
    'teams.cloud.microsoft:80,443',
    'teams.microsoft.com:80,443',
    '*.keydelivery.mediaservices.windows.net:443',
    '*.streaming.mediaservices.windows.net:443',
    'aka.ms:443',
    'adl.windows.com:80,443',
    'join.secure.skypeassets.com:443',
    'mlccdnprod.azureedge.net:443',
    '*.skype.com:80,443',

    # =========================
    # SharePoint / OneDrive
    # =========================
    '*.sharepoint.com:80,443',
    'storage.live.com:443',
    '*.search.production.apac.trafficmanager.net:443',
    '*.search.production.emea.trafficmanager.net:443',
    '*.search.production.us.trafficmanager.net:443',
    '*.wns.windows.com:80,443',
    'admin.onedrive.com:80,443',
    'officeclient.microsoft.com:80,443',
    'g.live.com:80,443',
    'oneclient.sfx.ms:80,443',
    '*.sharepointonline.com:80,443',
    'spoprod-a.akamaihd.net:80,443',
    '*.svc.ms:80,443',

    # =========================
    # Microsoft 365 Common
    # =========================
    '*.officeapps.live.com:80,443',
    '*.online.office.com:80,443',
    'office.live.com:80,443',
    '*.office.net:80,443',
    '*.onenote.com:443',
    '*cdn.onenote.net:443',
    'ajax.aspnetcdn.com:80,443',
    'apis.live.net:443',
    'www.onedrive.com:443',
    '*.auth.microsoft.com:80,443',
    '*.msftidentity.com:80,443',
    '*.msidentity.com:80,443',
    'login.microsoftonline.com:80,443',
    'login.windows.net:80,443',
    '*.microsoftonline.com:80,443',
    '*.msauth.net:80,443',
    '*.msftauth.net:80,443',
    'enterpriseregistration.windows.net:80,443',
    '*.office365.com:80,443',
    '*.aadrm.com:443',
    '*.informationprotection.azure.com:443',
    '*.portal.cloudappsecurity.com:443',
    '*.events.data.microsoft.com:443',
    'support.microsoft.com:443',
    'technet.microsoft.com:443',
    'go.microsoft.com:80,443',
    'officecdn.microsoft.com:80,443',
    '*.virtualearth.net:80,443',
    '*.outlookmobile.com:443',
    'account.live.com:443',
    'login.live.com:443',
    '*.yammer.com:443',
    '*.assets-yammer.com:443',
    'www.outlook.com:80,443',
    'sway.com:443',
    'www.sway.com:443',
    'oneocsp.microsoft.com:80,443',
    'crl.microsoft.com:80,443',
    'activation.sls.microsoft.com:443',
    'admin.microsoft.com:80,443',
    '*.office.com:80,443',
    'www.microsoft365.com:80,443',
    '*.flow.microsoft.com:443',
    '*.powerapps.com:443',
    '*.powerautomate.com:443',
    '*.activity.windows.com:443',
    'activity.windows.com:443',
    '*.cortana.ai:443',
    '*.cloud.microsoft:443',
    '*.static.microsoft:443',
    '*.usercontent.microsoft:443'
)


# INTUNE ENDPOINTS
# MAJ : 19.02.2026
# https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/intune-endpoints?tabs=north-america
$endpoints_intune_fqdn = @(

    # Intune / MDM
    '*.manage.microsoft.com:443,80',
    'manage.microsoft.com:443,80',
    '*.dm.microsoft.com:443,80',

    # Delivery Optimization / Updates
    '*.dl.delivery.mp.microsoft.com:443,80',
    '*.do.dsp.mp.microsoft.com:443,80',
    '*.update.microsoft.com:443,80',
    '*.windowsupdate.com:443,80',
    'adl.windows.com:443,80',
    'dl.delivery.mp.microsoft.com:443,80',
    'tsfe.trafficshaping.dsp.mp.microsoft.com:443,80',

    # Microsoft Services
    '*.s-microsoft.com:443,80',
    'clientconfig.passport.net:443,80',
    'windowsphone.com:443,80',
    '*.notify.windows.com:443,80',
    '*.wns.windows.com:443,80',

    # CDN
    'approdimedatahotfix.azureedge.net:443,80',
    'approdimedatapri.azureedge.net:443,80',
    'approdimedatasec.azureedge.net:443,80',
    'euprodimedatahotfix.azureedge.net:443,80',
    'euprodimedatapri.azureedge.net:443,80',
    'euprodimedatasec.azureedge.net:443,80',
    'naprodimedatahotfix.azureedge.net:443,80',
    'naprodimedatapri.azureedge.net:443,80',
    'naprodimedatasec.azureedge.net:443,80',

    # Win32 CDN
    'swda01-mscdn.azureedge.net:443,80',
    'swda02-mscdn.azureedge.net:443,80',
    'swdb01-mscdn.azureedge.net:443,80',
    'swdb02-mscdn.azureedge.net:443,80',
    'swdc01-mscdn.azureedge.net:443,80',
    'swdc02-mscdn.azureedge.net:443,80',
    'swdd01-mscdn.azureedge.net:443,80',
    'swdd02-mscdn.azureedge.net:443,80',
    'swdin01-mscdn.azureedge.net:443,80',
    'swdin02-mscdn.azureedge.net:443,80',

    # Certificates / OEM
    'ekcert.spserv.microsoft.com:443,80',
    'ekop.intel.com:443,80',
    'ftpm.amd.com:443,80',

    # Azure / Support
    'intunecdnpeasd.azureedge.net:443,80',
    '*.monitor.azure.com:443,80',
    '*.support.services.microsoft.com:443,80',

    # Teams / Comms
    '*.trouter.communication.microsoft.com:443,80',
    '*.trouter.communications.svc.cloud.microsoft:443,80',
    '*.trouter.teams.microsoft.com:443,80',
    'api.flightproxy.skype.com:443,80',
    'ecs.communication.microsoft.com:443,80',
    'edge.microsoft.com:443,80',
    'edge.skype.com:443,80',

    # Remote Help
    'remoteassistanceprodacs.communication.azure.com:443,80',
    'remoteassistanceprodacseu.communication.azure.com:443,80',
    'remotehelp.microsoft.com:443,80',

    # Misc
    'wcpstatic.microsoft.com:443,80',
    'lgmsapeweu.blob.core.windows.net:443,80',

    # Attestation
    'intunemaape1.eus.attest.azure.net:443',
    'intunemaape10.weu.attest.azure.net:443',
    'intunemaape11.weu.attest.azure.net:443',
    'intunemaape12.weu.attest.azure.net:443',
    'intunemaape13.jpe.attest.azure.net:443',
    'intunemaape17.jpe.attest.azure.net:443',
    'intunemaape18.jpe.attest.azure.net:443',
    'intunemaape19.jpe.attest.azure.net:443',
    'intunemaape2.eus2.attest.azure.net:443',
    'intunemaape3.cus.attest.azure.net:443',
    'intunemaape4.wus.attest.azure.net:443',
    'intunemaape5.scus.attest.azure.net:443',
    'intunemaape7.neu.attest.azure.net:443',
    'intunemaape8.neu.attest.azure.net:443',
    'intunemaape9.neu.attest.azure.net:443',

    # WebPubSub / Gov
    '*.webpubsub.azure.com:443,80',
    '*.gov.teams.microsoft.us:443,80',
    'remoteassistanceweb.usgov.communication.azure.us:443,80',

    # Edge Config / Org Msg
    'config.edge.skype.com:443,80',
    'contentauthassetscdn-prod.azureedge.net:443,80',
    'contentauthassetscdn-prodeur.azureedge.net:443,80',
    'contentauthrafcontentcdn-prod.azureedge.net:443,80',
    'contentauthrafcontentcdn-prodeur.azureedge.net:443,80',
    'fd.api.orgmsg.microsoft.com:443,80',
    'ris.prod.api.personalization.ideas.microsoft.com:443,80',

    # NTP (UDP)
    'time.windows.com:123'
)


Function Test-HostPortList {
    param (
        [string]$Hostname,
        [string]$PortList = ''
    )
    #Bypass les wildcards
    if ($Hostname.StartsWith('*')) {
        #Write-Host "Cannot test $Hostname" -ForegroundColor DarkYellow
        return
    }

    # Utilise le port 443 si on l'a pas spécifié
    if ($PortList -eq '') {
        $PortList = "443"
    }


    Write-Host -NoNewline "Testing $Hostname"
    foreach ($TestPort in $PortList.split(',')) {
        Write-Host -NoNewline "    ($TestPort) "
        if (Test-NetConnection $Hostname -Port $TestPort -InformationLevel Quiet -WarningAction SilentlyContinue) {
            Write-Host -NoNewline "OK" -ForegroundColor Green
        }
        else {
            Write-Host -NoNewline "ECHEC" -ForegroundColor Red
        }
    }
    Write-Host ""
}

#Fonction spéciale pour faire de l'UDP, principalement pour Time.window.com
function Test-NtpPort {
    param (
        [string]$Hostname,
        [int]$Port = 123
    )

    try {
        $ntpData = New-Object byte[] 48
        $ntpData[0] = 0x1B

        $ip = (Resolve-DnsName $Hostname -Type A | Select-Object -First 1 -ExpandProperty IPAddress)

        $endpoint = New-Object System.Net.IPEndPoint ([System.Net.IPAddress]::Parse($ip)),$Port
        $socket = New-Object System.Net.Sockets.UdpClient
        $socket.Client.ReceiveTimeout = 3000

        $socket.Connect($endpoint)
        [void]$socket.Send($ntpData,$ntpData.Length)

        $remote = $endpoint
        $response = $socket.Receive([ref]$remote)

        if ($response.Length -gt 0) {
            Write-Host "Testing $Hostname ...(UDP $Port) OK" -ForegroundColor Green
        }
        else {
            Write-Host "Testing $Hostname ...(UDP $Port) FAIL" -ForegroundColor Red
        }

        $socket.Close()
    }
    catch {
        Write-Host "Testing $Hostname ...(UDP $Port) FAIL" -ForegroundColor Red
    }
}


Write-Host ""
Write-Host "==================================================" -ForegroundColor Yellow
Write-Host " WINDOWS 365 SERVICE TESTS" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Yellow

foreach ($hostport in $endpoints_w365) {
    $hostport = $hostport.split(':')
    Test-HostPortList -Hostname $hostport[0] -PortList $hostport[1]
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Yellow
Write-Host " MICROSOFT 365 TESTS" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Yellow

foreach ($hostport in $endpoints_office365) {
    $hostport = $hostport.split(':')
    Test-HostPortList -Hostname $hostport[0] -PortList $hostport[1]
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Yellow
Write-Host " AZURE VIRTUAL DESKTOP TESTS" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Yellow

foreach ($hostport in $endpoints_avd) {
    $hostport = $hostport.split(':')
    Test-HostPortList -Hostname $hostport[0] -PortList $hostport[1]
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Yellow
Write-Host " AZURE VIRTUAL DESKTOP CLIENT ENDPOINT TESTS" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Yellow

foreach ($hostport in $endpoints_client) {
    $hostport = $hostport.split(':')
    Test-HostPortList -Hostname $hostport[0] -PortList $hostport[1]
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Yellow
Write-Host " INTUNE ENDPOINTS TESTS" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Yellow

foreach ($hostport in $endpoints_intune_fqdn) {
    $hostport = $hostport.split(':')
    Test-HostPortList -Hostname $hostport[0] -PortList $hostport[1]
}

Write-Host ""
Write-Host "Test Done." -ForegroundColor Cyan
