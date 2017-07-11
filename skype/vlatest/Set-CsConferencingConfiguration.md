---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsConferencingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing collection of conferencing configuration settings.
Conference settings determine such things as the maximum allowed size for meeting content and handouts; the content grace period (that is, the amount of time content will be stored before being deleted); and the URLs for the internal and external downloads of the supported client.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies an existing collection of conferencing configuration settings.
Conference settings determine such things as the maximum allowed size for meeting content and handouts; the content grace period (that is, the amount of time content will be stored before being deleted); and the URLs for the internal and external downloads of the supported client.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsConferencingConfiguration [[-Identity] <XdsIdentity>] [-ClientAppSharingPort <UInt16>]
 [-ClientAppSharingPortRange <UInt32>] [-ClientAudioPort <UInt16>] [-ClientAudioPortRange <UInt32>]
 [-ClientFileTransferPort <UInt16>] [-ClientFileTransferPortRange <UInt32>] [-ClientMediaPort <UInt16>]
 [-ClientMediaPortRange <UInt32>] [-ClientMediaPortRangeEnabled <Boolean>] [-ClientSipDynamicPort <UInt16>]
 [-ClientSipDynamicPortRange <UInt32>] [-ClientVideoPort <UInt16>] [-ClientVideoPortRange <UInt32>]
 [-ConsoleDownloadExternalUrl <String>] [-ConsoleDownloadInternalUrl <String>] [-ContentGracePeriod <TimeSpan>]
 [-HelpdeskExternalUrl <String>] [-HelpdeskInternalUrl <String>] [-MaxBandwidthPerAppSharingServiceMb <UInt64>]
 [-MaxContentStorageMb <UInt16>] [-Organization <String>] [-Force] [-WhatIf] [-Confirm]
 [-MaxUploadFileSizeMb <UInt16>] [-CloudPollServicePrimaryUrl <String>]
 [-CloudPollServiceSecondaryUrl <String>] [<CommonParameters>]
```

### Instance
```
Set-CsConferencingConfiguration [-Instance <PSObject>] [-ClientAppSharingPort <UInt16>]
 [-ClientAppSharingPortRange <UInt32>] [-ClientAudioPort <UInt16>] [-ClientAudioPortRange <UInt32>]
 [-ClientFileTransferPort <UInt16>] [-ClientFileTransferPortRange <UInt32>] [-ClientMediaPort <UInt16>]
 [-ClientMediaPortRange <UInt32>] [-ClientMediaPortRangeEnabled <Boolean>] [-ClientSipDynamicPort <UInt16>]
 [-ClientSipDynamicPortRange <UInt32>] [-ClientVideoPort <UInt16>] [-ClientVideoPortRange <UInt32>]
 [-ConsoleDownloadExternalUrl <String>] [-ConsoleDownloadInternalUrl <String>] [-ContentGracePeriod <TimeSpan>]
 [-HelpdeskExternalUrl <String>] [-HelpdeskInternalUrl <String>] [-MaxBandwidthPerAppSharingServiceMb <UInt64>]
 [-MaxContentStorageMb <UInt16>] [-Organization <String>] [-Force] [-WhatIf] [-Confirm]
 [-MaxUploadFileSizeMb <UInt16>] [-CloudPollServicePrimaryUrl <String>]
 [-CloudPollServiceSecondaryUrl <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, or are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to managing user activities, administrators need to manage the Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site, and the service scopes) aren't used to specify whether or not a user can share applications during a conference; if application sharing is allowed, however, these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

When you install Microsoft Lync Server 2010, the system provides you with a single collection of conferencing configuration settings (the global collection).
If you need to create custom settings for a site or service, you can do so using the New-CsConferencingConfiguration cmdlet.
After these custom settings have been created, you can modify any of them (or modify the global collection) by using the Set-CsConferencingConfiguration cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsConferencingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsConferencingConfiguration"}

**Below Content Applies To:** Lync Server 2013

For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, or are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to managing user activities, administrators need to manage the Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site, and the service scopes) aren't used to specify whether or not a user can share applications during a conference; if application sharing is allowed, however, these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

When you install Lync Server, the system provides you with a single collection of conferencing configuration settings (the global collection).
If you need to create custom settings for a site or service, you can do so using the New-CsConferencingConfiguration cmdlet.
After these custom settings have been created, you can modify any of them (or modify the global collection) by using the Set-CsConferencingConfiguration cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsConferencingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsConferencingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, or are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to managing user activities, administrators need to manage the Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site, and the service scopes) aren't used to specify whether or not a user can share applications during a conference; if application sharing is allowed, however, these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

When you install Skype for Business Server 2015, the system provides you with a single collection of conferencing configuration settings (the global collection).
If you need to create custom settings for a site or service, you can do so using the New-CsConferencingConfiguration cmdlet.
After these custom settings have been created, you can modify any of them (or modify the global collection) by using the Set-CsConferencingConfiguration cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsConferencingConfiguration -Identity global -Organization Litwareinc
```

In Example 1, Set-CsConferencingConfiguration modifies the global instance of conferencing configuration settings; in this case, the command sets the value of the Organization property to Litwareinc.
This is done by including the Organization parameter followed by the organization name: Litwareinc.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Set-CsConferencingConfiguration modifies the global instance of conferencing configuration settings; in this case, the command sets the value of the Organization property to Litwareinc.
This is done by including the Organization parameter followed by the organization name: Litwareinc.

Set-CsConferencingConfiguration -Identity global -Organization Litwareinc

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Set-CsConferencingConfiguration cmdlet modifies the global instance of conferencing configuration settings; in this case, the command sets the value of the Organization property to Litwareinc.
This is done by including the Organization parameter followed by the organization name: Litwareinc.

Set-CsConferencingConfiguration -Identity global -Organization Litwareinc

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration | Set-CsConferencingConfiguration -Organization Litwareinc
```

Example 2 is an extension of the first example; in this case, the command modifies the value of the Organization property for each collection of conferencing configuration settings currently in use.
To do this the command first uses Get-CsConferencingConfiguration to retrieve a collection of all the conferencing configuration settings.
This collection is then piped to Set-CsConferencingConfiguration, which takes each item in the collection and changes the value of the Organization property to Litwareinc.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is an extension of the first example; in this case, the command modifies the value of the Organization property for each collection of conferencing configuration settings currently in use.
To do this the command first uses Get-CsConferencingConfiguration to retrieve a collection of all the conferencing configuration settings.
This collection is then piped to Set-CsConferencingConfiguration, which takes each item in the collection and changes the value of the Organization property to Litwareinc.

Get-CsConferencingConfiguration | Set-CsConferencingConfiguration -Organization Litwareinc

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is an extension of the first example; in this case, the command modifies the value of the Organization property for each collection of conferencing configuration settings currently in use.
To do this the command first uses the Get-CsConferencingConfiguration cmdlet to retrieve a collection of all the conferencing configuration settings.
This collection is then piped to the Set-CsConferencingConfiguration cmdlet, which takes each item in the collection and changes the value of the Organization property to Litwareinc.

Get-CsConferencingConfiguration | Set-CsConferencingConfiguration -Organization Litwareinc

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration -Filter site:* | Set-CsConferencingConfiguration -MaxContentStorageMb 50
```

The command shown in Example 3 changes the value of the MaxContentStorageMb property for all the conferencing configuration settings applied at the site scope.
To do this, the command first calls Get-CsConferencingConfiguration along with the Filter parameter; the filter value "site:*" ensures that only settings where the Identity begins with the characters "site:" are returned.
The filtered collection is then piped to the Set-CsConferencingConfiguration, which changes the MaxContentStorageMb property value for each item in the collection to 50.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 changes the value of the MaxContentStorageMb property for all the conferencing configuration settings applied at the site scope.
To do this, the command first calls Get-CsConferencingConfiguration along with the Filter parameter; the filter value "site:*" ensures that only settings where the Identity begins with the characters "site:" are returned.
The filtered collection is then piped to the Set-CsConferencingConfiguration, which changes the MaxContentStorageMb property value for each item in the collection to 50.

Get-CsConferencingConfiguration -Filter site:* | Set-CsConferencingConfiguration -MaxContentStorageMb 50

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 changes the value of the MaxContentStorageMb property for all the conferencing configuration settings applied at the site scope.
To do this, the command first calls the Get-CsConferencingConfiguration cmdlet along with the Filter parameter; the filter value "site:*" ensures that only settings where the Identity begins with the characters "site:" are returned.
The filtered collection is then piped to the Set-CsConferencingConfiguration cmdlet, which changes the MaxContentStorageMb property value for each item in the collection to 50.

Get-CsConferencingConfiguration -Filter site:* | Set-CsConferencingConfiguration -MaxContentStorageMb 50

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration | Where-Object {$_.MaxContentStorageMb -gt 100} | Set-CsConferencingConfiguration -MaxContentStorageMB 100
```

In Example 4, all the conferencing configuration settings that allow for content storage of more than 100 megabytes are modified to set the maximum allowed content storage to 100 megabytes.
To carry out this task, the command first calls Get-CsConferencingConfiguration without any parameters in order to return a collection of all the conferencing configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the MaxContentStorageMb property is greater than 100.
This filtered collection is then piped to Set-CsConferencingConfiguration, which takes each item in the collection and sets the value of the MaxContentStorageMb property to 100.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, all the conferencing configuration settings that allow for content storage of more than 100 megabytes are modified to set the maximum allowed content storage to 100 megabytes.
To carry out this task, the command first calls Get-CsConferencingConfiguration without any parameters in order to return a collection of all the conferencing configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the MaxContentStorageMb property is greater than 100.
This filtered collection is then piped to Set-CsConferencingConfiguration, which takes each item in the collection and sets the value of the MaxContentStorageMb property to 100.

Get-CsConferencingConfiguration | Where-Object {$_.MaxContentStorageMb -gt 100} | Set-CsConferencingConfiguration -MaxContentStorageMB 100

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, all the conferencing configuration settings that allow for content storage of more than 100 megabytes are modified to set the maximum allowed content storage to 100 megabytes.
To carry out this task, the command first calls the Get-CsConferencingConfiguration cmdlet without any parameters in order to return a collection of all the conferencing configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the MaxContentStorageMb property is greater than 100.
This filtered collection is then piped to the Set-CsConferencingConfiguration cmdlet, which takes each item in the collection and sets the value of the MaxContentStorageMb property to 100.

Get-CsConferencingConfiguration | Where-Object {$_.MaxContentStorageMb -gt 100} | Set-CsConferencingConfiguration -MaxContentStorageMB 100

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Set-CsConferencingConfiguration -Identity site:Redmond -ContentGracePeriod "22:00:00"
```

The preceding command retrieves the conferencing configuration settings for the Redmond site (-Identity site:Redmond) and modifies the value of the ContentGracePeriod property, setting the grace period to 22 hours (22 hours: 00 minutes: 00 seconds).

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 retrieves the conferencing configuration settings for the Redmond site (-Identity site:Redmond) and modifies the value of the ContentGracePeriod property, setting the grace period to 22 hours (22 hours: 00 minutes: 00 seconds).

Set-CsConferencingConfiguration -Identity site:Redmond -ContentGracePeriod "22:00:00"

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 retrieves the conferencing configuration settings for the Redmond site (-Identity site:Redmond) and modifies the value of the ContentGracePeriod property, setting the grace period to 22 hours (22 hours: 00 minutes: 00 seconds).

Set-CsConferencingConfiguration -Identity site:Redmond -ContentGracePeriod "22:00:00"

### -------------------------- Example 6 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Fabrikam"} | Set-CsConferencingConfiguration -Organization Litwareinc
```

In Example 6, all the conferencing configuration settings that do not list Fabrikam as the Organization are modified; in particular, all these settings are assigned Litwareinc as the new organization.
To accomplish this task, the command first calls Get-CsConferencingConfiguration without any parameters; this returns a collection of all the conferencing configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects all the settings where the Organization property is not equal to (-ne) Fabrikam.
The filtered collection is then piped to Set-CsConferencingConfiguration; Set-CsConferencingConfiguration takes each item in the collection and changes the value of the Organization property to Litwareinc.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

In Example 6, all the conferencing configuration settings that do not list Fabrikam as the Organization are modified; in particular, all these settings are assigned Litwareinc as the new organization.
To accomplish this task, the command first calls Get-CsConferencingConfiguration without any parameters; this returns a collection of all the conferencing configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects all the settings where the Organization property is not equal to (-ne) Fabrikam.
The filtered collection is then piped to Set-CsConferencingConfiguration; Set-CsConferencingConfiguration takes each item in the collection and changes the value of the Organization property to Litwareinc.

Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Fabrikam"} | Set-CsConferencingConfiguration -Organization Litwareinc

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

In Example 6, all the conferencing configuration settings that do not list Fabrikam as the Organization are modified; in particular, all these settings are assigned Litwareinc as the new organization.
To accomplish this task, the command first calls the Get-CsConferencingConfiguration cmdlet without any parameters; this returns a collection of all the conferencing configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects all the settings where the Organization property is not equal to (-ne) Fabrikam.
The filtered collection is then piped to the Set-CsConferencingConfiguration cmdlet; the Set-CsConferencingConfiguration cmdlet takes each item in the collection and changes the value of the Organization property to Litwareinc.

Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Fabrikam"} | Set-CsConferencingConfiguration -Organization Litwareinc

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the collection of conferencing configuration settings to be modified.
To refer to the global collection, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To refer to a collection at the service scope, use syntax like the following: -Identity "service:ConferencingServer:atl-cs-001.litwareinc.com".
The Web Conferencing service is the only service that can host these configuration settings.

If this parameter is not specified, then Set-CsConferencingConfiguration will automatically modify the global settings.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the collection of conferencing configuration settings to be modified.
To refer to the global collection, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To refer to a collection at the service scope, use syntax like the following: -Identity "service:ConferencingServer:atl-cs-001.litwareinc.com".
The Web Conferencing service is the only service that can host these configuration settings.

If this parameter is not specified, then the Set-CsConferencingConfiguration cmdlet will automatically modify the global settings.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClientAppSharingPort
Represents the starting port number used for application sharing.
The ClientAppSharingPort must be a value port number between 1024 and 65535, inclusive.
The default value is 5350.

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

### -ClientAppSharingPortRange
Indicates the total number of ports available for application sharing.
(The default value is 40.) To determine the actual ports used for application sharing, use this value and the ClientAppSharingPort value.
For example, if ClientAppSharingPort is set to 5350 and ClientAppSharingPortRange is set to 3, then the following 3 ports are available for application sharing: 5350; 5351; 5352.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAudioPort
Represents the starting port number used for client audio.
The ClientAudioPort must be a value port number between 1024 and 65535, inclusive.
The default value is 5350.

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

### -ClientAudioPortRange
Indicates the total number of ports available for client audio.
(The default value is 40.) To determine the actual ports used for client audio, use this value and the ClientAudioPort value.
For example, if ClientAudioPort is set to 5350 and ClientAudioPortRange is set to 3, then the following three ports are available for client audio: 5350; 5351; 5352.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientFileTransferPort
Represents the starting port number used for file transfers.
The ClientFileTransferPort must be a value port number between 1024 and 65535, inclusive.
The default value is 5350.

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

### -ClientFileTransferPortRange
Indicates the total number of ports available for file transfers.
(The default value is 40.) To determine the actual ports used for file transfers, use this value and the ClientFileTransferPort value.
For example, if ClientFileTransferPort is set to 5350 and ClientFileTransferPortRange is set to 3, then the following three ports are available for file transfers: 5350; 5351; 5352.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientMediaPort
**Below Content Applies To:** Lync Server 2010

Represents the starting port number used for client media.
The ClientMediaPort must be a value port number between 1024 and 65535, inclusive.
The default value is 5350.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Represents the starting port number used for client media.
Use this parameter for Microsoft Office Communicator 2007 R2 clients.
The ClientMediaPort must be a value port number between 1024 and 65535, inclusive.
The default value is 5350.



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

### -ClientMediaPortRange
**Below Content Applies To:** Lync Server 2010

Indicates the total number of ports available for client media.
(The default value is 40.) To determine the actual ports used for client media, use this value and the ClientMediaPort value.
For example, if ClientMediaPort is set to 5350 and ClientMediaPortRange is set to 3, then the following three ports are available for client media: 5350; 5351; 5352.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates the total number of ports available for client media.
(The default value is 40.) Use this parameter for Office Communicator 2007 R2 clients.
To determine the actual ports used for client media, use this value and the ClientMediaPort value.
For example, if ClientMediaPort is set to 5350 and ClientMediaPortRange is set to 3, then the following three ports are available for client media: 5350; 5351; 5352.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientMediaPortRangeEnabled
When set to True, clients will use the specified port range for media traffic.
When set to False (the default value) any available port (from port 1024 through port 65535) will be used to accommodate media traffic.

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

### -ClientSipDynamicPort
Represents the starting port number used for SIP traffic.
The ClientSipDynamicPort must be a value port number between 1024 and 65535, inclusive.
The default value is 7100.

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

### -ClientSipDynamicPortRange
Indicates the total number of ports available for SIP traffic.
(The default value is 3.) To determine the actual ports used for SIP traffic, use this value and the ClientSipDynamicPort value.
For example, if ClientSipDynamicPort is set to 7100 and ClientSipDynamicPortRange is set to 3, then the following 3 ports are available for client media: 7100; 7101; 7102.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientVideoPort
Represents the starting port number used for client video.
The ClientVideoPort must be a value port number between 1024 and 65535, inclusive.
The default value is 5350.

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

### -ClientVideoPortRange
Indicates the total number of ports available for client video.
(The default value is 40.) To determine the actual ports used for client video, use this value and the ClientVideoPort value.
For example, if ClientVideoPort is set to 5350 and ClientVideoPortRange is set to 3, then the following three ports are available for client video: 5350; 5351; 5352.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConsoleDownloadExternalUrl
**Below Content Applies To:** Lync Server 2010

URL where external users can download a supported client.



**Below Content Applies To:** Lync Server 2013

URL where external users can download a supported client such as Microsoft Lync 2013 Preview.
Note that this setting applies only to legacy clients (such as Microsoft Office Communicator 2007 R2) that are logging on to a Lync Server pool.



**Below Content Applies To:** Skype for Business Server 2015

URL where external users can download a supported client such as Skype for Business.
Note that this setting applies only to legacy clients (such as Microsoft Office Communicator 2007 R2) that are logging on to a Skype for Business Server 2015 pool.



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

### -ConsoleDownloadInternalUrl
**Below Content Applies To:** Lync Server 2010

URL where internal users can download a supported client.



**Below Content Applies To:** Lync Server 2013

URL where internal users can download a supported client such as Microsoft Lync 2013 Preview.
Note that this setting applies only to legacy clients (such as Microsoft Office Communicator 2007 R2) that are logging on to a Lync Server pool.



**Below Content Applies To:** Skype for Business Server 2015

URL where internal users can download a supported client such as Skype for Business.
Note that this setting applies only to legacy clients (such as Microsoft Office Communicator 2007 R2) that are logging on to a Skype for Business Server 2015 pool.



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

### -ContentGracePeriod
**Below Content Applies To:** Lync Server 2010

Indicates how long conference content will remain on the server following the end of the conference.
The ContentGracePeriod must be specified using the format Days.Hours:Minutes:Seconds.
For example, to set the content grace period to 30 days, use this syntax: -ContentGracePeriod 30.00:00:00.

The content grace period can be set to any value between 0 and 180 days.
The default value is 15 days (15.00:00:00).



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates how long conference content will remain on the server following the end of the conference.
The ContentGracePeriod must be specified using the format Days.Hours:Minutes:Seconds.
For example, to set the content grace period to 30 days, use this syntax: -ContentGracePeriod 30.00:00:00.

The content grace period can be set to any value between 30 minutes (00:30:00) and 180 days (180.00:00:00).
The default value is 15 days (15.00:00:00).



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

### -HelpdeskExternalUrl
URL where external users who click Help during a conference will be directed.

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

### -HelpdeskInternalUrl
URL where internal users who click Help during a conference will be directed.

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

### -MaxBandwidthPerAppSharingServiceMb
Indicates the maximum amount of bandwidth (in megabytes) set aside for the Application Sharing Conferencing service.
MaxBandwidthPerAppSharingServiceMb can be set to any integer value between 50 and 100000, inclusive.
The default value is 375 megabytes.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxContentStorageMb
Maximum amount of file space (in megabytes) allowed for the storage of meeting content.
MaxContentStorageMb can be set to any integer value between 50 and 1024 (1 gigabyte), inclusive.
The default value is 500 megabytes.

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

### -Organization
Name of the organization hosting the conference.

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

### -MaxUploadFileSizeMb
Maximum total size of the files (including handouts and PowerPoint slides) that can be used in a given conference.
This setting is typically used when conference content is being archived in Microsoft Exchange Server: by setting a maximum upload file size you can ensure that the content used in the conference (and thus the content which must be archived) does not exceed the maximum file size configured for Microsoft Exchange.
The default value is 500 megabytes.

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

### -CloudPollServicePrimaryUrl
This parameter is not currently used with Skype for Business Server 2015.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CloudPollServiceSecondaryUrl
This parameter is not currently used with Skype for Business Server 2015.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.
Set-CsConferencingConfiguration accepts pipelined instances of the conferencing configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.
The Set-CsConferencingConfiguration cmdlet accepts pipelined instances of the conferencing configuration object.

## OUTPUTS

###  
Set-CsConferencingConfiguration does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.

###  
The Set-CsConferencingConfiguration cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c468d7fd-fb2c-469c-85fb-58e0834aac36(OCS.14).aspx)

[Get-CsConferencingConfiguration]()

[New-CsConferencingConfiguration]()

[Remove-CsConferencingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/c468d7fd-fb2c-469c-85fb-58e0834aac36(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c468d7fd-fb2c-469c-85fb-58e0834aac36(OCS.16).aspx)

