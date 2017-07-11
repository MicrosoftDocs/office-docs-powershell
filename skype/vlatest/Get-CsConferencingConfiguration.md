---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsConferencingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the conference configuration settings for your organization.
Conference settings determine such things as the maximum-allowed size for conference content and handouts, the content grace period (that is, the amount of time content will be stored before being deleted), and the URLs for the internal and external downloads of the supported client.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about the conference configuration settings for your organization.
Conference settings determine such things as the maximum-allowed size for conference content and handouts, the content grace period (that is, the amount of time content will be stored before being deleted), and the URLs for the internal and external downloads of the supported client.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsConferencingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsConferencingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, or are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to user activities, administrators need to manage the Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site, and the service scopes) aren't used to specify whether or not a user can share applications during a conference; if application sharing is allowed, however, these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

The Get-CsConferencingConfiguration cmdlet provides a way for administrators to return information about all the conferencing configuration settings currently in use in their organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsConferencingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsConferencingConfiguration"}

**Below Content Applies To:** Lync Server 2013

For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, or are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to user activities, administrators need to manage the Lync Server Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site, and the service scopes) aren't used to specify whether or not a user can share applications during a conference; if application sharing is allowed, however, these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

The Get-CsConferencingConfiguration cmdlet provides a way for administrators to return information about all the conferencing configuration settings currently in use in their organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsConferencingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsConferencingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, or are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to user activities, administrators need to manage the Skype for Business Server 2015 Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site, and the service scopes) aren't used to specify whether or not a user can share applications during a conference; if application sharing is allowed, however, these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

The Get-CsConferencingConfiguration cmdlet provides a way for administrators to return information about all the conferencing configuration settings currently in use in their organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration
```

Example 1 returns information about all the conferencing configuration settings currently in use in the organization.
This is done by calling Get-CsConferencingConfiguration without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information about all the conferencing configuration settings currently in use in the organization.
This is done by calling Get-CsConferencingConfiguration without any parameters.

Get-CsConferencingConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information about all the conferencing configuration settings currently in use in the organization.
This is done by calling the Get-CsConferencingConfiguration cmdlet without any parameters.

Get-CsConferencingConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration -Identity site:Redmond
```

In Example 2, conferencing configuration information is returned for the Redmond site (-Identity site:Redmond).
Because Identities must be unique, this command will always return, at most, a single collection of conferencing configuration settings.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, conferencing configuration information is returned for the Redmond site (-Identity site:Redmond).
Because Identities must be unique, this command will always return, at most, a single collection of conferencing configuration settings.

Get-CsConferencingConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, conferencing configuration information is returned for the Redmond site (-Identity site:Redmond).
Because Identities must be unique, this command will always return, at most, a single collection of conferencing configuration settings.

Get-CsConferencingConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration -Filter "site:*"
```

The command shown in Example 3 returns information about all the conferencing configuration settings that have been applied at the site scope.
To do this, Get-CsConferencingConfiguration is called along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value 'site:" are returned.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns information about all the conferencing configuration settings that have been applied at the site scope.
To do this, Get-CsConferencingConfiguration is called along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value 'site:" are returned.

Get-CsConferencingConfiguration -Filter "site:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns information about all the conferencing configuration settings that have been applied at the site scope.
To do this, the Get-CsConferencingConfiguration cmdlet is called along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value 'site:" are returned.

Get-CsConferencingConfiguration -Filter "site:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Litwareinc"}
```

The preceding command returns information about all the conferencing configuration settings where the organization is not set to Litwareinc.
To carry out this task, the command first calls Get-CsConferencingConfiguration without any parameters; this returns a collection of all the conferencing configuration settings used in the organization.
The resulting collection is then piped to the Where-Object cmdlet, which selects only those settings where the Organization property is not equal to Litwareinc.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information about all the conferencing configuration settings where the organization is not set to Litwareinc.
To carry out this task, the command first calls Get-CsConferencingConfiguration without any parameters; this returns a collection of all the conferencing configuration settings used in the organization.
The resulting collection is then piped to the Where-Object cmdlet, which selects only those settings where the Organization property is not equal to Litwareinc.

Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Litwareinc"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information about all the conferencing configuration settings where the organization is not set to Litwareinc.
To carry out this task, the command first calls the Get-CsConferencingConfiguration cmdlet without any parameters; this returns a collection of all the conferencing configuration settings used in the organization.
The resulting collection is then piped to the Where-Object cmdlet, which selects only those settings where the Organization property is not equal to Litwareinc.

Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Litwareinc"}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsConferencingConfiguration | Where-Object {$_.MaxContentStorageMB -gt 100}
```

In Example 5 information is returned only for those conferencing configuration settings where the maximum content storage space is greater than 100 megabytes.
To do this, the command first calls Get-CsConferencingConfiguration without any parameters in order to return a collection of all your conferencing configuration settings.
This collection is then piped to the Where-Object cmdlet, which picks out those settings that where the content storage space is greater than 100 megabytes.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, information is returned only for those conferencing configuration settings where the maximum content storage space is greater than 100 megabytes.
To do this, the command first calls Get-CsConferencingConfiguration without any parameters in order to return a collection of all your conferencing configuration settings.
This collection is then piped to the Where-Object cmdlet, which picks out those settings that where the content storage space is greater than 100 megabytes.

Get-CsConferencingConfiguration | Where-Object {$_.MaxContentStorageMB -gt 100}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, information is returned only for those conferencing configuration settings where the maximum content storage space is greater than 100 megabytes.
To do this, the command first calls the Get-CsConferencingConfiguration cmdlet without any parameters in order to return a collection of all your conferencing configuration settings.
This collection is then piped to the Where-Object cmdlet, which picks out those settings that where the content storage space is greater than 100 megabytes.

Get-CsConferencingConfiguration | Where-Object {$_.MaxContentStorageMB -gt 100}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the collection of conferencing configuration settings to be retrieved.
To retrieve the global settings, use this syntax: -Identity global.
To retrieve settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To retrieve settings configured at the service scope, use syntax similar to this: -Identity "service:ConferencingServer:atl-cs-001.litwareinc.com".

If this parameter is not included, then Get-CsConferencingConfiguration will return all the conferencing configuration settings currently in use in your organization.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the collection of conferencing configuration settings to be retrieved.
To retrieve the global settings, use this syntax: -Identity global.
To retrieve settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To retrieve settings configured at the service scope, use syntax similar to this: -Identity "service:ConferencingServer:atl-cs-001.litwareinc.com".

If this parameter is not included, then the Get-CsConferencingConfiguration cmdlet will return all the conferencing configuration settings currently in use in your organization.



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

### -Filter
Enables you to use wildcards when specifying the Identity of the conferencing configuration settings to be returned.
For example, this syntax returns all the settings configured at the site scope: -Filter "site:*".
This syntax returns all the settings configured at the service scope: -Filter "service:*".

Note that you cannot use both the Identity and the Filter parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the conferencing configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsConferencingConfiguration does not accept pipelined input.

###  
None.
The Get-CsConferencingConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsConferencingConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.

###  
The Get-CsConferencingConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/db4ab3bc-071c-4f73-a3a0-62dc8aed48a1(OCS.14).aspx)

[New-CsConferencingConfiguration]()

[Remove-CsConferencingConfiguration]()

[Set-CsConferencingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/db4ab3bc-071c-4f73-a3a0-62dc8aed48a1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/db4ab3bc-071c-4f73-a3a0-62dc8aed48a1(OCS.16).aspx)

