---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsClientVersionConfiguration

## SYNOPSIS
Removes the specified collection of client version configuration settings.
Client version configuration settings determine whether or not Skype for Business Server checks the version number of each client application that logs on to the system.
If client version filtering is enabled, then the ability of that client application to access the system will be based on settings configured in the appropriate client version policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsClientVersionConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Skype for Business Server by using Skype for Business; from a technical standpoint, there is nothing to prevent people from logging on by using Microsoft Office Communicator 2007 R2.

However, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Skype for Business; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Skype for Business.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Skype for Business Server.
When you install Skype for Business Server, a global set of client version configuration settings is installed and enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope.

Any site settings you create can later be deleted by using the `Remove-CsClientVersionConfiguration` cmdlet.
Note that you can also run the `Remove-CsClientVersionConfiguration` cmdlet against the global settings.
In that case, the global settings will not be removed; instead, the global properties will be reset to their default values.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsClientVersionConfiguration -Identity site:Redmond
```

The command shown in Example 1 deletes the client version configuration settings that have the Identity "site:Redmond".


### -------------------------- Example 2 ------------------------
```
Get-CsClientVersionConfiguration -Filter site:* | Remove-CsClientVersionConfiguration
```

In Example 2 all the client version configuration settings that have been applied at the site scope are deleted.
To accomplish this task the command first calls the `Get-CsClientVersionConfiguration` cmdlet and the Filter parameter; the filter value "site:*" ensures that only client version configuration settings that have an Identity beginning with the string value "site:" will be returned.
This filtered collection is then piped to the `Remove-CsClientVersionConfiguration` cmdlet, which deletes each item in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsClientVersionConfiguration | Where-Object {$_.Enabled -eq $False} | Remove-CsClientVersionConfiguration
```

In Example 3, all the client version configuration settings that are currently disabled are deleted.
To do this, the command first uses the `Get-CsClientVersionConfiguration` cmdlet to return a collection of all the client version configuration settings currently in use in the organization.
After this data is returned, the collection is piped to the `Where-Object` cmdlet, which picks out only those settings where the Enabled property is equal to False.
From there, the filtered collection is piped to the `Remove-CsClientVersionConfiguration` cmdlet, which deletes each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the collection of client version configuration settings to be removed.
To remove the global collection, use the following syntax: `-Identity global`.
(Keep in mind that the global settings will not actually be removed; instead, the global properties will all be reset to their default values.) To remove a site collection, use syntax similar to this: `-Identity site:Redmond`.
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
The `Remove-CsClientVersionConfiguration` cmdlet accepts pipelined instances of the client version configuration object.

## OUTPUTS

###  
None.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsClientVersionConfiguration]()

[New-CsClientVersionConfiguration]()

[Set-CsClientVersionConfiguration]()
