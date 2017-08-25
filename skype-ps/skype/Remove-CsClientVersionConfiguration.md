---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsClientVersionConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified collection of client version configuration settings.
Client version configuration settings determine whether or not Microsoft Lync Server 2010 checks the version number of each client application that logs on to the system.
If client version filtering is enabled, then the ability of that client application to access the system will be based on settings configured in the appropriate client version policy.

**Below Content Applies To:** Lync Server 2013

Removes the specified collection of client version configuration settings.
Client version configuration settings determine whether or not Lync Server checks the version number of each client application that logs on to the system.
If client version filtering is enabled, then the ability of that client application to access the system will be based on settings configured in the appropriate client version policy.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes the specified collection of client version configuration settings.
Client version configuration settings determine whether or not Skype for Business Server 2015 checks the version number of each client application that logs on to the system.
If client version filtering is enabled, then the ability of that client application to access the system will be based on settings configured in the appropriate client version policy.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsClientVersionConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Lync Server 2010 by using Microsoft Lync 2010; from a technical standpoint, there is nothing to prevent people from logging on by using Microsoft Office Communicator 2007 R2.

However, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Lync 2010; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Lync 2010.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Lync Server 2010.
When you install Lync Server 2010, a global set of client version configuration settings is installed and enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope.

Any site settings you create can later be deleted by using the Remove-CsClientVersionConfiguration cmdlet.
Note that you can also run Remove-CsClientVersionConfiguration against the global settings.
In that case, the global settings will not be removed; instead, the global properties will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsClientVersionConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClientVersionConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Server gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Lync Server by using Lync; from a technical standpoint, there is nothing to prevent people from logging on by using Microsoft Office Communicator 2007 R2.

However, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Lync; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Lync.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Lync Server.
When you install Lync Server, a global set of client version configuration settings is installed and enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope.

Any site settings you create can later be deleted by using the Remove-CsClientVersionConfiguration cmdlet.
Note that you can also run Remove-CsClientVersionConfiguration against the global settings.
In that case, the global settings will not be removed; instead, the global properties will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsClientVersionConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClientVersionConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Skype for Business Server 2015 by using Skype for Business; from a technical standpoint, there is nothing to prevent people from logging on by using Microsoft Office Communicator 2007 R2.

However, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Skype for Business; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Skype for Business.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Skype for Business Server 2015.
When you install Skype for Business Server 2015, a global set of client version configuration settings is installed and enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope.

Any site settings you create can later be deleted by using the Remove-CsClientVersionConfiguration cmdlet.
Note that you can also run the Remove-CsClientVersionConfiguration cmdlet against the global settings.
In that case, the global settings will not be removed; instead, the global properties will be reset to their default values.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsClientVersionConfiguration -Identity site:Redmond
```

The command shown in Example 1 deletes the client version configuration settings that have the Identity "site:Redmond".

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the client version configuration settings that have the Identity "site:Redmond".

Remove-CsClientVersionConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the client version configuration settings that have the Identity "site:Redmond".

Remove-CsClientVersionConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsClientVersionConfiguration -Filter site:* | Remove-CsClientVersionConfiguration
```

In Example 2 all the client version configuration settings that have been applied at the site scope are deleted.
To accomplish this task the command first calls Get-CsClientVersionConfiguration and the Filter parameter; the filter value "site:*" ensures that only client version configuration settings that have an Identity beginning with the string value "site:" will be returned.
This filtered collection is then piped to Remove-CsClientVersionConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2 all the client version configuration settings that have been applied at the site scope are deleted.
To accomplish this task the command first calls Get-CsClientVersionConfiguration and the Filter parameter; the filter value "site:*" ensures that only client version configuration settings that have an Identity beginning with the string value "site:" will be returned.
This filtered collection is then piped to Remove-CsClientVersionConfiguration, which deletes each item in the collection.

Get-CsClientVersionConfiguration -Filter site:* | Remove-CsClientVersionConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2 all the client version configuration settings that have been applied at the site scope are deleted.
To accomplish this task the command first calls the Get-CsClientVersionConfiguration cmdlet and the Filter parameter; the filter value "site:*" ensures that only client version configuration settings that have an Identity beginning with the string value "site:" will be returned.
This filtered collection is then piped to the Remove-CsClientVersionConfiguration cmdlet, which deletes each item in the collection.

Get-CsClientVersionConfiguration -Filter site:* | Remove-CsClientVersionConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsClientVersionConfiguration | Where-Object {$_.Enabled -eq $False} | Remove-CsClientVersionConfiguration
```

In the preceding command, all the client version configuration settings that are currently disabled are deleted.
To do this, the command first uses Get-CsClientVersionConfiguration to return a collection of all the client version configuration settings currently in use in the organization.
After this data is returned, the collection is piped to the Where-Object cmdlet, which picks out only those settings where the Enabled property is equal to False.
From there, the filtered collection is piped to Remove-CsClientVersionConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the client version configuration settings that are currently disabled are deleted.
To do this, the command first uses Get-CsClientVersionConfiguration to return a collection of all the client version configuration settings currently in use in the organization.
After this data is returned, the collection is piped to the Where-Object cmdlet, which picks out only those settings where the Enabled property is equal to False.
From there, the filtered collection is piped to Remove-CsClientVersionConfiguration, which deletes each item in the collection.

Get-CsClientVersionConfiguration | Where-Object {$_.Enabled -eq $False} | Remove-CsClientVersionConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the client version configuration settings that are currently disabled are deleted.
To do this, the command first uses the Get-CsClientVersionConfiguration cmdlet to return a collection of all the client version configuration settings currently in use in the organization.
After this data is returned, the collection is piped to the Where-Object cmdlet, which picks out only those settings where the Enabled property is equal to False.
From there, the filtered collection is piped to the Remove-CsClientVersionConfiguration cmdlet, which deletes each item in the collection.

Get-CsClientVersionConfiguration | Where-Object {$_.Enabled -eq $False} | Remove-CsClientVersionConfiguration

## PARAMETERS

### -Identity
Unique identifier for the collection of client version configuration settings to be removed.
To remove the global collection, use the following syntax: -Identity global.
(Keep in mind that the global settings will not actually be removed; instead, the global properties will all be reset to their default values.) To remove a site collection, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcards when specifying the Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.
Remove-CsClientVersionConfiguration accepts pipelined instances of the client version configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.
The Remove-CsClientVersionConfiguration cmdlet accepts pipelined instances of the client version configuration object.

## OUTPUTS

###  
None.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/42065d1d-a0ef-4fa4-826b-d65b14b343c9(OCS.14).aspx)

[Get-CsClientVersionConfiguration]()

[New-CsClientVersionConfiguration]()

[Set-CsClientVersionConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/42065d1d-a0ef-4fa4-826b-d65b14b343c9(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/42065d1d-a0ef-4fa4-826b-d65b14b343c9(OCS.16).aspx)

