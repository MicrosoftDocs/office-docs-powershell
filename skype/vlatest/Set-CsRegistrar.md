---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsRegistrar

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to modify the properties of one or more Registrars.
Registrars are used to authenticate logon requests, and to maintain information about user status and availability.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to modify the properties of one or more Registrars.
Registrars are used to authenticate logon requests, and to maintain information about user status and availability.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsRegistrar [[-Identity] <XdsGlobalRelativeIdentity>] [-ArchivingServer <String>]
 [-BackupRegistrar <String>] [-EdgeServer <String>] [-EnableAutomaticFailover <Boolean>]
 [-FailbackDetectionInterval <TimeSpan>] [-FailureDetectionInterval <TimeSpan>] [-MonitoringServer <String>]
 [-SipPort <UInt16>] [-UserServer <String>] [-WebPort <UInt16>] [-WebServer <String>] [-Force] [-WhatIf]
 [-Confirm] [-Registrar <String>] [-SipHealthPort <UInt16>] [-SipServerTcpPort <UInt16>]
 [-ArchivingDatabase <String>] [-LyssWcfMtlsPort <UInt16>] [-MirrorArchivingDatabase <String>]
 [-MirrorMonitoringDatabase <String>] [-MonitoringDatabase <String>] [-WinFabClientConnectionPort <UInt16>]
 [-WinFabFederationPort <UInt16>] [-WinFabIPCPort <UInt16>] [-WinFabLeaseAgentPort <UInt16>]
 [-WinFabReplicationPort <UInt16>] [-XmppGatewaySipPort <UInt16>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Registrar is perhaps the most important component in Microsoft Lync Server 2010; without a Registrar, users would not be able to log on to the system, and Lync Server 2010 would not be able to keep track of users and their current status.
When a user logs on to Lync Server, the endpoint the user is logging on from (be it a computer, a mobile phone, or some other device) sends a REGISTER request to the registration server; in turn the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

The Set-CsRegistrar cmdlet provides a way for you to modify the properties of one or more Registrars in your organization.
These modifications include changing port settings as well as specifying the action that should be taken if a Registrar should become unavailable.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsRegistrar cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsRegistrar\b"}

**Below Content Applies To:** Lync Server 2013

The Registrar is perhaps the most important component in Lync Server; without a Registrar, users would not be able to log on to the system, and Lync Server would not be able to keep track of users and their current status.
When a user logs on to Lync Server, the endpoint the user is logging on from (be it a computer, a mobile phone, or some other device) sends a REGISTER request to the registration server; in turn the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

The Set-CsRegistrar cmdlet provides a way for you to modify the properties of one or more Registrars in your organization.
These modifications include changing port settings as well as specifying the action that should be taken if a Registrar should become unavailable.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsRegistrar cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsRegistrar\b"}

**Below Content Applies To:** Skype for Business Server 2015

The Registrar is perhaps the most important component in Skype for Business Server 2015; without a Registrar, users would not be able to log on to the system, and Skype for Business Server 2015 would not be able to keep track of users and their current status.
When a user logs on to Skype for Business Server 2015, the endpoint the user is logging on from (be it a computer, a mobile phone, or some other device) sends a REGISTER request to the registration server; in turn the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

The Set-CsRegistrar cmdlet provides a way for you to modify the properties of one or more Registrars in your organization.
These modifications include changing port settings as well as specifying the action that should be taken if a Registrar should become unavailable.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsRegistrar -Identity "Registrar:atl-cs-001.litwareinc.com" -SipPort 5072
```

The command shown in Example 1 sets the SIP port for the Registrar Registrar:atl-cs-001.litwareinc.com to 5072.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 sets the SIP port for the Registrar Registrar:atl-cs-001.litwareinc.com to 5072.

Set-CsRegistrar -Identity "Registrar:atl-cs-001.litwareinc.com" -SipPort 5072

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 sets the SIP port for the Registrar Registrar:atl-cs-001.litwareinc.com to 5072.

Set-CsRegistrar -Identity "Registrar:atl-cs-001.litwareinc.com" -SipPort 5072

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsService -Registrar | ForEach-Object {Set-CsRegistrar -Identity $_.Identity -SipPort 5072}
```

The preceding command sets the SIP port for all the Registrars in the organization to 5072.
To do this, the command first uses Get-CsService and the Registrar parameter to return a collection of all the Registrars currently in use.
This collection is then piped to the ForEach-Object cmdlet, which takes each Registrar in the collection and runs the Set-CsRegistrar cmdlet in order to change the SIP port to 5072.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 sets the SIP port for all the Registrars in the organization to 5072.
To do this, the command first uses Get-CsService and the Registrar parameter to return a collection of all the Registrars currently in use.
This collection is then piped to the ForEach-Object cmdlet, which takes each Registrar in the collection and runs the Set-CsRegistrar cmdlet in order to change the SIP port to 5072.

Get-CsService -Registrar | ForEach-Object {Set-CsRegistrar -Identity $_.Identity -SipPort 5072}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 sets the SIP port for all the Registrars in the organization to 5072.
To do this, the command first uses the Get-CsService cmdlet and the Registrar parameter to return a collection of all the Registrars currently in use.
This collection is then piped to the ForEach-Object cmdlet, which takes each Registrar in the collection and runs the Set-CsRegistrar cmdlet in order to change the SIP port to 5072.

Get-CsService -Registrar | ForEach-Object {Set-CsRegistrar -Identity $_.Identity -SipPort 5072}

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Set-CsRegistrar -Identity "Registrar:atl-cs-001.litwareinc.com" -BackupRegistrar "Registrar:dublin-cs-001.litwareinc.com" -EnableAutomaticFailover $True
```

Example 3 configures both a backup Registrar (BackupRegistrar) and automatic failover (EnableAutomaticFailover) for the Registrar Registrar:atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 configures both a backup Registrar (BackupRegistrar) and automatic failover (EnableAutomaticFailover) for the Registrar Registrar:atl-cs-001.litwareinc.com.

Set-CsRegistrar -Identity "Registrar:atl-cs-001.litwareinc.com" -BackupRegistrar "Registrar:dublin-cs-001.litwareinc.com" -EnableAutomaticFailover $True

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 configures both a backup Registrar (BackupRegistrar) and automatic failover (EnableAutomaticFailover) for the Registrar Registrar:atl-cs-001.litwareinc.com.

Set-CsRegistrar -Identity "Registrar:atl-cs-001.litwareinc.com" -BackupRegistrar "Registrar:dublin-cs-001.litwareinc.com" -EnableAutomaticFailover $True

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the Registrar to be modified.
For example: -Identity "Registrar:atl-cs-001.litwareinc.com".

Note that you can leave off the prefix "Registrar:" when specifying a Registrar.
For example: -Identity "atl-cs-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the Registrar to be modified.
For example:

-Identity "Registrar:atl-cs-001.litwareinc.com"

Note that you can leave off the prefix "Registrar:" when specifying a Registrar.
For example:

-Identity "atl-cs-001.litwareinc.com"



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchivingServer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the Archiving Server to be associated with the Registrar.
For example: -ArchivingServer "ArchivingServer:atl-cs-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the Archiving Server to be associated with the Registrar.
For example:

-ArchivingServer "ArchivingServer:atl-cs-001.litwareinc.com"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupRegistrar
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the Registrar to be used if this Registrar is not available.
For example: -BackupRegistrar "Registrar:dublin-cs-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the Registrar to be used if this Registrar is not available.
For example:

-BackupRegistrar "Registrar:dublin-cs-001.litwareinc.com"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EdgeServer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the Edge Server to be associated with the Registrar.
For example: -EdgeServer "EdgeServer:atl-edge-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the Edge Server to be associated with the Registrar.
For example:

-EdgeServer "EdgeServer:atl-edge-001.litwareinc.com"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAutomaticFailover
If True, the backup Registrar will be employed any time the primary Registrar is unavailable.
If False, the backup Registrar will not be used if the primary Registrar is not available.

This parameter also affects users who have registered with a backup Registrar.
If this parameter is set to True, then those users will be dropped from the backup Registrar and re-registered on the primary Registrar if and when that Registrar becomes available.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailbackDetectionInterval
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Specifies the amount of time that the system will wait before checking to see if a Registrar that had become unavailable is now available.
If you have set EnableAutomaticFailover to True, the system will "failover" to the backup Registrar any time a Registrar becomes unavailable.
That simply means that the system will take users who are logged-on to the failed Registrar and attempt to log them on to the backup Registrar.

The FailbackDetectionInterval property specifies the amount of time that the system will wait before checking to see if the original Registrar is available again.
If so, Lync Server will then attempt to "failback" to that Registrar.
Failback simply means reverting back to the Registrar initially in use; in other words, logging users back on to their original Registrar.

Note that failback is an automated process only.
You cannot manually failback from one Registrar to another.

The detection interval can be set to any value between 30 seconds and 84,400 seconds (24 hours); specify the time span using the format hours:minutes:seconds.
For example, this sets the interval to 1 hour and 15 minutes: - FailbackDetectionInterval 01:15:00.

This parameter cannot be used unless you have specified a backup Registrar.



**Below Content Applies To:** Skype for Business Server 2015

Specifies the amount of time that the system will wait before checking to see if a Registrar that had become unavailable is now available.
If you have set EnableAutomaticFailover to True, the system will "failover" to the backup Registrar any time a Registrar becomes unavailable.
That simply means that the system will take users who are logged-on to the failed Registrar and attempt to log them on to the backup Registrar.

The FailbackDetectionInterval property specifies the amount of time that the system will wait before checking to see if the original Registrar is available again.
If so, Skype for Business Server 2015 will then attempt to "failback" to that Registrar.
Failback simply means reverting back to the Registrar initially in use; in other words, logging users back on to their original Registrar.

Note that failback is an automated process only.
You cannot manually failback from one Registrar to another.

The detection interval can be set to any value between 30 seconds and 84,400 seconds (24 hours); specify the time span using the format hours:minutes:seconds.
For example, this sets the interval to 1 hour and 15 minutes:

-FailbackDetectionInterval 01:15:00

This parameter cannot be used unless you have specified a backup Registrar.



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailureDetectionInterval
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Specifies the time interval that the system will wait before deciding that a Registrar is unavailable.
If EnableAutomaticFailover has been set to True, the system will then attempt to log users on to the backup Registrar instead.

The detection interval can be set to any value between 30 seconds and 84,400 seconds (24 hours); specify the time span using the format hours:minutes:seconds.
For example, this sets the interval to 1 hour and 15 minutes: - FailureDetectionInterval 01:15:00.

This parameter cannot be used unless you have specified a backup Registrar.



**Below Content Applies To:** Skype for Business Server 2015

Specifies the time interval that the system will wait before deciding that a Registrar is unavailable.
If EnableAutomaticFailover has been set to True, the system will then attempt to log users on to the backup Registrar instead.

The detection interval can be set to any value between 30 seconds and 84,400 seconds (24 hours); specify the time span using the format hours:minutes:seconds.
For example, this sets the interval to 1 hour and 15 minutes:

-FailureDetectionInterval 01:15:00

This parameter cannot be used unless you have specified a backup Registrar.



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringServer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the Monitoring Server to be associated with the Registrar.
For example: -MonitoringServer "MonitoringServer:atl-cs-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the Monitoring Server to be associated with the Registrar.
For example:

-MonitoringServer "MonitoringServer:atl-cs-001.litwareinc.com"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipPort
Port used for SIP (Session Initiation Protocol) traffic.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserServer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the User Services server to be associated with the Registrar.
For example: -UserServer "UserServer:atl-cs-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the User Services server to be associated with the Registrar.
For example:

-UserServer "UserServer:atl-cs-001.litwareinc.com"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebPort
Port used for communicating with Web servers.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebServer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the Web Server to be associated with the Registrar.
For example: -WebServer "WebServer:atl-cs-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the Web Server to be associated with the Registrar.
For example:

-WebServer "WebServer:atl-cs-001.litwareinc.com"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Registrar
**Below Content Applies To:** Lync Server 2010

{{Fill Registrar Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Service location of the Registrar.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipHealthPort
**Below Content Applies To:** Lync Server 2010

{{Fill SipHealthPort Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Port used for monitoring server health.



```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipServerTcpPort
**Below Content Applies To:** Lync Server 2010

{{Fill SipServerTcpPort Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

SIP listening port.
The default value is 5060.



```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchivingDatabase
Service Identity of the database used by the Archiving service.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LyssWcfMtlsPort
Port used by the Lync Storage Service (LYSS).
The default value is 5077.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MirrorArchivingDatabase
Service Identity of the mirror database used by the Archiving service.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MirrorMonitoringDatabase
Service Identity of the mirror database used by the Monitoring service.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringDatabase
Service Identity of the monitoring database associated with the Registrar.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WinFabClientConnectionPort
Port used for client connections to Windows Fabric.
The default value is 5092.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WinFabFederationPort
Port used for Windows Fabric federation.
Federation refers to the process by which Windows fabric routes messages.
The default value is 5090.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WinFabIPCPort
Port used by Windows Fabric for inter-process communication (IPC).
IPC is a technology that allows for multiple threads in a process to exchange data.
The default value is 5093.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WinFabLeaseAgentPort
Port used by the Windows Fabric lease agent.
Lease agents are used to interact with the kernel level lease driver.
The default value is 5091.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WinFabReplicationPort
**Below Content Applies To:** Lync Server 2013

Port used for Windows Fabric replication.
Lync Server 2013 Preview uses Windows Fabric to replicate conference directories to all the Front End servers within a Registrar pool.
The default value is 5094.



**Below Content Applies To:** Skype for Business Server 2015

Port used for Windows Fabric replication.
Skype for Business Server 2015 uses Windows Fabric to replicate conference directories to all the Front End servers within a Registrar pool.
The default value is 5094.



```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -XmppGatewaySipPort
**Below Content Applies To:** Lync Server 2013

Port used by the XMPP gateway associated with the Registrar.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users are allowed to exchange instant messages and presence information with your Lync Server users.
The default value is 5098.



**Below Content Applies To:** Skype for Business Server 2015

Port used by the XMPP gateway associated with the Registrar.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users are allowed to exchange instant messages and presence information with your Skype for Business Server 2015 users.
The default value is 5098.



```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Set-CsRegistrar does not accept pipelined input.

###  
None.
The Set-CsRegistrar cmdlet does not accept pipelined input.

## OUTPUTS

###  
Set-CsRegistrar does not return any objects or values.
Instead, the command modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayRegistrar object.

###  
The Set-CsRegistrar cmdlet does not return any objects or values.
Instead, the command modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayRegistrar object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/e0c31acc-179c-4423-910e-8bd7807e6489(OCS.14).aspx)

[Get-CsService]()

[Online Version](http://technet.microsoft.com/EN-US/library/e0c31acc-179c-4423-910e-8bd7807e6489(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e0c31acc-179c-4423-910e-8bd7807e6489(OCS.16).aspx)

