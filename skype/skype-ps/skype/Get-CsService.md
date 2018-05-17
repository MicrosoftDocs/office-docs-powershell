---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsService
schema: 2.0.0
---

# Get-CsService

## SYNOPSIS
Returns information about the services and server roles being used in your Skype for Business Server infrastructure.
A service is an instance of a role that has been deployed in a Skype for Business Server pool.
For example, you might have a pool of computers all running the Monitoring service.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsService [[-Identity] <XdsGlobalRelativeIdentity>] [-PoolFqdn <String>] [<CommonParameters>]
```

### Filter
```
Get-CsService [-Filter <String>] [-PoolFqdn <String>] [<CommonParameters>]
```

### ApplicationDatabase
```
Get-CsService [-ApplicationDatabase] [-PoolFqdn <String>] [<CommonParameters>]
```

### ApplicationServer
```
Get-CsService [-ApplicationServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### ArchivingDatabase
```
Get-CsService [-ArchivingDatabase] [-PoolFqdn <String>] [<CommonParameters>]
```

### ArchivingServer
```
Get-CsService [-ArchivingServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### CentralManagement
```
Get-CsService [-CentralManagement] [-PoolFqdn <String>] [<CommonParameters>]
```

### CentralManagementDatabase
```
Get-CsService [-CentralManagementDatabase] [-PoolFqdn <String>] [<CommonParameters>]
```

### ConferenceServer
```
Get-CsService [-ConferencingServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### Director
```
Get-CsService [-Director] [-PoolFqdn <String>] [<CommonParameters>]
```

### EdgeServer
```
Get-CsService [-EdgeServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### FileStore
```
Get-CsService [-FileStore] [-PoolFqdn <String>] [<CommonParameters>]
```

### ManagementServer
```
Get-CsService [-ManagementServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### MediationServer
```
Get-CsService [-MediationServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### MonitoringServer
```
Get-CsService [-MonitoringServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### MonitoringDatabase
```
Get-CsService [-MonitoringDatabase] [-PoolFqdn <String>] [<CommonParameters>]
```

### ProvisionServer
```
Get-CsService [-PoolFqdn <String>] [-ProvisionServer] [<CommonParameters>]
```

### ProvisionDatabase
```
Get-CsService [-PoolFqdn <String>] [-ProvisionDatabase] [<CommonParameters>]
```

### PstnGateway
```
Get-CsService [-PoolFqdn <String>] [-PstnGateway] [<CommonParameters>]
```

### Registrar
```
Get-CsService [-PoolFqdn <String>] [-Registrar] [<CommonParameters>]
```

### TrustedApplicationPool
```
Get-CsService [-PoolFqdn <String>] [-TrustedApplicationPool] [<CommonParameters>]
```

### UserDatabase
```
Get-CsService [-PoolFqdn <String>] [-UserDatabase] [<CommonParameters>]
```

### UserServer
```
Get-CsService [-PoolFqdn <String>] [-UserServer] [<CommonParameters>]
```

### WebServer
```
Get-CsService [-PoolFqdn <String>] [-WebServer] [<CommonParameters>]
```

### BackupServer
```
Get-CsService [-BackupServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### LegalInterceptServer
```
Get-CsService [-LegalInterceptServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### PersistentChatComplianceDatabase
```
Get-CsService [-PersistentChatComplianceDatabase] [-PoolFqdn <String>] [<CommonParameters>]
```

### PersistentChatDatabase
```
Get-CsService [-PersistentChatDatabase] [-PoolFqdn <String>] [<CommonParameters>]
```

### PersistentChatServer
```
Get-CsService [-PersistentChatServer] [-PoolFqdn <String>] [<CommonParameters>]
```

### WacServer
```
Get-CsService [-PoolFqdn <String>] [-WacServer] [<CommonParameters>]
```

### VideoGateway
```
Get-CsService [-PoolFqdn <String>] [-VideoGateway] [<CommonParameters>]
```

### VideoInteropServer
```
Get-CsService [-PoolFqdn <String>] [-VideoInteropServer] [<CommonParameters>]
```

## DESCRIPTION
The capabilities found in Skype for Business Server are typically expressed as services or as server roles.
For example, you can configure Skype for Business Server to automatically save a transcript of every instant messaging session that takes place in your organization.
In order to do this, you must install the Archiving Server server role.
Services and server roles can be configured at the same time you install Skype for Business Server itself, or they can be configured after the software is up and running.

The Get-CsService cmdlet enables you to return information about the server roles and services running in your organization.
Called without any additional parameters, the Get-CsService cmdlet returns detailed information about all your services and server roles.
Alternatively, you can limit the returned data to a specified pool by using the PoolFqdn parameter.
In addition, you can use any number of switch parameters to limit the returned data to a specific type of service.
A switch parameter is a parameter that does not require a parameter value.
For example, this command returns information about all your Archiving Servers:

`Get-CsService -ArchivingServer`

Note that you can only use one such switch parameter per command.
The following command, which tries to return information about both Archiving Servers and Monitoring Servers, will fail:

`Get-CsService -ArchivingServer -MonitoringServer`

If you need to return information for multiple server roles, you can use the Get-CsService cmdlet to return a complete collection of service data, and then pipe that data to the Where-Object cmdlet:

`Get-CsService | Where-Object {$_.Role -eq "ArchivingServer" -or $_.Role -eq "MonitoringServer"}`



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsService
```

The command shown in Example 1 returns information about all the Skype for Business Server services and server roles currently running in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsService -ApplicationServer
```

Example 2 returns information only about the Application service.
You can return information for other services/server roles simply by using the appropriate parameter.
For example, this command returns information about the file store:

### -------------------------- Example 3 --------------------------
```
Get-CsService -PoolFqdn "atl-cs-001.litwareinc.com" | Select-Object Identity
```

Example 3 reports back the Identity for each service located on the pool atl-cs-001.litwareinc.com.
To carry out this task, the command first calls the Get-CsService cmdlet and the PoolFqdn parameter to return only those services and server roles found on the pool atl-cs-001.litwareinc.com.
This collection is then piped to the Select-Object cmdlet, which reports back the Identity of each item in the collection.

### -------------------------- Example 4 --------------------------
```
Get-CsService | Where-Object {$_.SiteID -eq "site:Redmond"}
```

In Example 4, information is returned for all the services/server roles found on the Redmond site.
This is done by first calling the Get-CsService cmdlet without any parameters in order to return a collection of all the services and server roles currently in use in the organization.
This data is then piped to the Where-Object cmdlet, which picks out only those items where the SiteID property is equal to site:Redmond.

### -------------------------- Example 5 --------------------------
```
Get-CsService | Where-Object {$_.DependentServiceList -like "*Registrar*"}
```

The command shown in Example 5 returns information about all the services that list the Registrar as a dependent service.
To do this, the Get-CsService cmdlet is called in order to return a collection of all the services and server roles currently in use.
This collection is then piped to the Where-Object cmdlet, which selects each item where the DependentServiceList property includes the string value "Registrar".
The Where-Object cmdlet criteria is specified by using the -like operator and the wildcard value "*Registrar*".



## PARAMETERS

### -Identity
Unique identifier of the specific service or server role to be returned.
For example:

`-Identity "Registrar:atl-cs-001.litwareinc.com"`

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards to specify the service (or services) to be returned.
You cannot use both the Identity and the Filter parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationDatabase
Returns information about the Application databases used in your organization.
Application databases are used by the Application service.

```yaml
Type: SwitchParameter
Parameter Sets: ApplicationDatabase
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationServer
Returns information about the Application service.
The Application service provides a way to run applications created by using the Microsoft Unified Communications Managed API (UCMA).

```yaml
Type: SwitchParameter
Parameter Sets: ApplicationServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchivingDatabase
Returns information about the Archiving databases used in your organization.
Archiving databases store transcripts of instant messaging sessions.

```yaml
Type: SwitchParameter
Parameter Sets: ArchivingDatabase
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchivingServer
Returns information about the Archiving Servers used in your organization.
Archiving Servers enable you to save the transcripts of instant messaging sessions.

```yaml
Type: SwitchParameter
Parameter Sets: ArchivingServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CentralManagement
Returns information about the Central Management service used in your organization.
The Central Management service is used to send configuration data to computers running Skype for Business Server services.

```yaml
Type: SwitchParameter
Parameter Sets: CentralManagement
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CentralManagementDatabase
Returns information about the Central Management store used in your organization.
The Central Management store maintains configuration information for Skype for Business Server.

```yaml
Type: SwitchParameter
Parameter Sets: CentralManagementDatabase
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConferencingServer
Returns information about the A/V Conferencing service used in your organization.
The A/V Conferencing service is used to conduct meetings and conferences.

```yaml
Type: SwitchParameter
Parameter Sets: ConferenceServer
Aliases: ConferenceServer
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Director
Returns information about the Directors used in your organization.
Directors are empowered to handle user requests and user authentication, but do not house user accounts.
Directors are typically used to handle requests from external users.

```yaml
Type: SwitchParameter
Parameter Sets: Director
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EdgeServer
Returns information about the Edge Servers used in your organization.
Edge Servers provide connectivity between your internal network and the Internet.

```yaml
Type: SwitchParameter
Parameter Sets: EdgeServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileStore
Returns information about the File Stores used in your organization.
The File Store is used to maintain Skype for Business Server files, such as audio files used by the Announcement service.

```yaml
Type: SwitchParameter
Parameter Sets: FileStore
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagementServer
Returns information about the Central Management Server used in your organization.
The Central Management Server is commonly collocated with the Front End Servers and is responsible for accessing information in the Central Management store.

```yaml
Type: SwitchParameter
Parameter Sets: ManagementServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediationServer
Returns information about the Mediation Servers used in your organization.
Mediation Servers help provide a bridge between your Enterprise Voice network and the public switched telephone network (PSTN).

```yaml
Type: SwitchParameter
Parameter Sets: MediationServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringServer
Returns information about the Monitoring Servers used in your organization.
Monitoring Servers are used to track Enterprise Voice phone usage and call quality.

```yaml
Type: SwitchParameter
Parameter Sets: MonitoringServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringDatabase
Returns information about the monitoring databases used in your organization.
Monitoring databases store Enterprise Voice phone usage and call quality information.

```yaml
Type: SwitchParameter
Parameter Sets: MonitoringDatabase
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name (FQDN) of the pool hosting the service or server role.
If you use the PoolFqdn parameter without specifying a service-specific parameter, then all the services and server roles found on that pool will be returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvisionServer
Returns information about the Provision Server service used in your organization.
The Provision Server service is used to manage Lync Server certificates.

```yaml
Type: SwitchParameter
Parameter Sets: ProvisionServer
Aliases: 
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvisionDatabase
Returns information about the provision databases used in your organization.
Provision databases maintain information about Lync Server certificates.

```yaml
Type: SwitchParameter
Parameter Sets: ProvisionDatabase
Aliases: 
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PstnGateway
Returns information about the public switched telephone network (PSTN) gateways used in your organization.
PSTN gateways translate signals from Enterprise Voice devices to signals that can be understood by PSTN devices, and vice-versa.

```yaml
Type: SwitchParameter
Parameter Sets: PstnGateway
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Registrar
Returns information about the Registrars used in your organization.
Registrars are used to authenticate users and to keep track of a user's current status.

```yaml
Type: SwitchParameter
Parameter Sets: Registrar
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedApplicationPool
Returns information about the trusted application pools used in your organization.
Trusted applications pools host computers that run trusted applications.

```yaml
Type: SwitchParameter
Parameter Sets: TrustedApplicationPool
Aliases: ExternalServer
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserDatabase
Returns information about the User database used in your organization.
User databases store data needed by the User Server service.

```yaml
Type: SwitchParameter
Parameter Sets: UserDatabase
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserServer
Returns information about the User Services service used in your organization.
The User Services service provides such things as user replication, in-band provisioning, presence publication and notification, and contact card exchange.

```yaml
Type: SwitchParameter
Parameter Sets: UserServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebServer
Returns information about the Web Services service used in your organization.
The Web Services service host web-based applications such as the Address Book service.

```yaml
Type: SwitchParameter
Parameter Sets: WebServer
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupServer
Returns information about the backup servers used in your organization.

```yaml
Type: SwitchParameter
Parameter Sets: BackupServer
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegalInterceptServer
Returns information about the legal intercept servers used in your organization.
Legal intercept servers provide real-time interception of instant messaging communications on Office 365.

```yaml
Type: SwitchParameter
Parameter Sets: LegalInterceptServer
Aliases: 
Applicable: Lync Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistentChatComplianceDatabase
Returns information about the databases used for maintaining Persistent Chat compliance information.

```yaml
Type: SwitchParameter
Parameter Sets: PersistentChatComplianceDatabase
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistentChatDatabase
Returns information about the databases used for maintaining Persistent Chat information.

```yaml
Type: SwitchParameter
Parameter Sets: PersistentChatDatabase
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistentChatServer
Returns information about the Persistent Chat servers used in your organization.

```yaml
Type: SwitchParameter
Parameter Sets: PersistentChatServer
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacServer
Returns information about the Office Web Apps servers used with Microsoft Lync Server.
Office Web Apps server was previously known as "WacServer".

```yaml
Type: SwitchParameter
Parameter Sets: WacServer
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoGateway
Returns information about the video gateway service.
Video gateways provide a way to connect Skype for Business users to video teleconferencing devices.

```yaml
Type: SwitchParameter
Parameter Sets: VideoGateway
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoInteropServer
Returns information about the video interoperability service.
The video interoperability service provides a way to seamless connect Skype for Business users to third-party video teleconferencing providers.

```yaml
Type: SwitchParameter
Parameter Sets: VideoInteropServer
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

###  
The Get-CsService cmdlet returns different objects based on the parameters used when calling the cmdlet.
For example, if you include the MonitoringDatabase parameter, the Get-CsService cmdlet returns instances of the Microsoft.Rtc.Management.Xds.DisplayMonitoringDatabase object.
To determine the objects returned using other parameters, call the Get-CsService cmdlet using one of those parameters, and then pipe the returned object to the Get-Member cmdlet.
For example: 

`Get-CsService -Registrar | Get-Member`


## NOTES


## RELATED LINKS

[Set-CsApplicationServer](Set-CsApplicationServer.md)

[Set-CsArchivingServer](Set-CsArchivingServer.md)

[Set-CsConferenceServer](Set-CsConferenceServer.md)

[Set-CsDirector](Set-CsDirector.md)

[Set-CsEdgeServer](Set-CsEdgeServer.md)

[Set-CsManagementServer](Set-CsManagementServer.md)

[Set-CsMediationServer](Set-CsMediationServer.md)

[Set-CsMonitoringServer](Set-CsMonitoringServer.md)

[Set-CsRegistrar](Set-CsRegistrar.md)

[Set-CsUserServer](Set-CsUserServer.md)

[Set-CsWebServer](Set-CsWebServer.md)

