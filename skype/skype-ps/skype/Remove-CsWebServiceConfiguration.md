---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsWebServiceConfiguration
schema: 2.0.0
---

# Remove-CsWebServiceConfiguration

## SYNOPSIS
Removes one or more collections of Web Services configuration settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsWebServiceConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Many Skype for Business Server components are web-based: these components either use web services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Skype for Business Server Control Panel use webpages as the interface between Skype for Business Server and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization.
This includes managing group expansion, certificate settings and allowed authentication methods.
Because you can configure different settings at the global, site and service scope (for the Web Services service only), you can customize Web Services capabilities for different users and different locations.

If you create custom Web Services configuration settings at the site or service scope these settings can later be removed by using the `Remove-CsWebServiceConfiguration` cmdlet.
Note that you can also run the `Remove-CsWebServiceConfiguration` cmdlet against the global collection of Web Services settings.
In that case, however, the global collection will not be removed; that's because Skype for Business Server does not allow you to remove global settings.
Instead, all the properties in the global collection will revert to their default values.
For example, suppose you have changed the MaxGroupSizeToExpand value to 500.
Because the default value for this property is 100, "removing" the global collection will reset the value of the MaxGroupSizeToExpand property to 100.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsWebServiceConfiguration -Identity site:Redmond
```

Example 1 removes the Web Services configuration settings for the Redmond site.


### -------------------------- Example 2 ------------------------
```
Get-CsWebServiceConfiguration -Filter "site:*" | Remove-CsWebServiceConfiguration
```

In Example 2, all the Web Services settings configured at the site scope are removed.
To carry out this task, the command first calls the `Get-CsWebServiceConfiguration` cmdlet and the Filter parameter; the filter value "site:*" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
This filtered collection is then piped to the `Remove-CsWebServiceConfiguration` cmdlet, which deletes each item in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsWebServiceConfiguration | Where-Object {$_.EnableGroupExpansion -eq $False} | Remove-CsWebServiceConfiguration
```

The command shown in Example 3 deletes all the Web Services configuration settings where group expansion has been disabled.
To do this, the command first calls the `Get-CsWebServiceConfiguration` cmdlet without any parameters in order to return a collection of all the Web Services configuration settings used in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those settings where the EnableGroupExpansion property is equal to False.
The filtered collection is then piped to the `Remove-CsWebServiceConfiguration` cmdlet, which deletes each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the Web Services configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To remove settings configured at the service scope, use syntax similar to this:

`-Identity "service:WebServer:atl-cs-001.litwareinc.com"`

The `Remove-CsWebServiceConfiguration` cmdlet can also be run against the global collection.
In that case, however, the global collection will not be removed; instead, all the properties in that collection will be reset to their default values.
To reset the global collection, use this syntax:

`-Identity global`


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.
The `Remove-CsWebServiceConfiguration` cmdlet accepts pipelined input of the Web Services settings object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsWebServiceConfiguration` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.

## NOTES

## RELATED LINKS

[Get-CsWebServiceConfiguration](Get-CsWebServiceConfiguration.md)

[New-CsWebServiceConfiguration](New-CsWebServiceConfiguration.md)

[Set-CsWebServiceConfiguration](Set-CsWebServiceConfiguration.md)

