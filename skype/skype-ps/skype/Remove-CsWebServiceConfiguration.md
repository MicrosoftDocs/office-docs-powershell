---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsWebServiceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes one or more collections of Web Services configuration settings.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes one or more collections of Web Services configuration settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsWebServiceConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Many Microsoft Lync Server 2010components are web-based: these components either use web services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Microsoft Lync Server 2010 Control Panel use webpages as the interface between Lync Server 2010 and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization.
This includes managing group expansion, certificate settings, and allowed authentication methods.
Because you can configure different settings at the global, site, and service scope (for the Web Services service only), you can customize Web Services capabilities for different users and different locations.

If you create custom Web Services configuration settings at the site or service scope these settings can later be removed by using the Remove-CsWebServiceConfiguration cmdlet.
Note that you can also run Remove-CsWebServiceConfiguration against the global collection of Web Services settings.
In that case, however, the global collection will not be removed; that's because Lync Server does not allow you to remove global settings.
Instead, all the properties in the global collection will revert to their default values.
For example, suppose you have changed the MaxGroupSizeToExpand value to 500.
Because the default value for this property is 100, "removing" the global collection will reset the value of the MaxGroupSizeToExpand property to 100.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsWebServiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsWebServiceConfiguration"}

**Below Content Applies To:** Lync Server 2013

Many Lync Server components are web-based: these components either use web services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Lync Server Control Panel use webpages as the interface between Lync Server and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization.
This includes managing group expansion, certificate settings, and allowed authentication methods.
Because you can configure different settings at the global, site, and service scope (for the Web Services service only), you can customize Web Services capabilities for different users and different locations.

If you create custom Web Services configuration settings at the site or service scope these settings can later be removed by using the Remove-CsWebServiceConfiguration cmdlet.
Note that you can also run Remove-CsWebServiceConfiguration against the global collection of Web Services settings.
In that case, however, the global collection will not be removed; that's because Lync Server does not allow you to remove global settings.
Instead, all the properties in the global collection will revert to their default values.
For example, suppose you have changed the MaxGroupSizeToExpand value to 500.
Because the default value for this property is 100, "removing" the global collection will reset the value of the MaxGroupSizeToExpand property to 100.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsWebServiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsWebServiceConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Many Skype for Business Server 2015 components are web-based: these components either use web services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Skype for Business Server Control Panel use webpages as the interface between Skype for Business Server 2015 and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization.
This includes managing group expansion, certificate settings, and allowed authentication methods.
Because you can configure different settings at the global, site, and service scope (for the Web Services service only), you can customize Web Services capabilities for different users and different locations.

If you create custom Web Services configuration settings at the site or service scope these settings can later be removed by using the Remove-CsWebServiceConfiguration cmdlet.
Note that you can also run the Remove-CsWebServiceConfiguration cmdlet against the global collection of Web Services settings.
In that case, however, the global collection will not be removed; that's because Skype for Business Server 2015 does not allow you to remove global settings.
Instead, all the properties in the global collection will revert to their default values.
For example, suppose you have changed the MaxGroupSizeToExpand value to 500.
Because the default value for this property is 100, "removing" the global collection will reset the value of the MaxGroupSizeToExpand property to 100.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsWebServiceConfiguration -Identity site:Redmond
```

The preceding command removes the Web Services configuration settings for the Redmond site.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes the Web Services configuration settings for the Redmond site.

Remove-CsWebServiceConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes the Web Services configuration settings for the Redmond site.

Remove-CsWebServiceConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsWebServiceConfiguration -Filter "site:*" | Remove-CsWebServiceConfiguration
```

In Example 2, all the Web Services settings configured at the site scope are removed.
To carry out this task, the command first calls Get-CsWebServiceConfiguration and the Filter parameter; the filter value "site:*" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
This filtered collection is then piped to Remove-CsWebServiceConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the Web Services settings configured at the site scope are removed.
To carry out this task, the command first calls Get-CsWebServiceConfiguration and the Filter parameter; the filter value "site:*" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
This filtered collection is then piped to Remove-CsWebServiceConfiguration, which deletes each item in the collection.

Get-CsWebServiceConfiguration -Filter "site:*" | Remove-CsWebServiceConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the Web Services settings configured at the site scope are removed.
To carry out this task, the command first calls the Get-CsWebServiceConfiguration cmdlet and the Filter parameter; the filter value "site:*" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
This filtered collection is then piped to the Remove-CsWebServiceConfiguration cmdlet, which deletes each item in the collection.

Get-CsWebServiceConfiguration -Filter "site:*" | Remove-CsWebServiceConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsWebServiceConfiguration | Where-Object {$_.EnableGroupExpansion -eq $False} | Remove-CsWebServiceConfiguration
```

The command shown in Example 3 deletes all the Web Services configuration settings where group expansion has been disabled.
To do this, the command first calls Get-CsWebServiceConfiguration without any parameters in order to return a collection of all the Web Services configuration settings used in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the EnableGroupExpansion property is equal to False.
The filtered collection is then piped to Remove-CsWebServiceConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 deletes all the Web Services configuration settings where group expansion has been disabled.
To do this, the command first calls Get-CsWebServiceConfiguration without any parameters in order to return a collection of all the Web Services configuration settings used in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the EnableGroupExpansion property is equal to False.
The filtered collection is then piped to Remove-CsWebServiceConfiguration, which deletes each item in the collection.

Get-CsWebServiceConfiguration | Where-Object {$_.EnableGroupExpansion -eq $False} | Remove-CsWebServiceConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 deletes all the Web Services configuration settings where group expansion has been disabled.
To do this, the command first calls the Get-CsWebServiceConfiguration cmdlet without any parameters in order to return a collection of all the Web Services configuration settings used in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the EnableGroupExpansion property is equal to False.
The filtered collection is then piped to the Remove-CsWebServiceConfiguration cmdlet, which deletes each item in the collection.

Get-CsWebServiceConfiguration | Where-Object {$_.EnableGroupExpansion -eq $False} | Remove-CsWebServiceConfiguration

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the Web Services configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To remove settings configured at the service scope, use syntax similar to this: -Identity "service:WebServer:atl-cs-001.litwareinc.com".

Remove-CsWebServiceConfiguration can also be run against the global collection.
In that case, however, the global collection will not be removed; instead, all the properties in that collection will be reset to their default values.
To reset the global collection, use this syntax: -Identity global.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the Web Services configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To remove settings configured at the service scope, use syntax similar to this:

-Identity "service:WebServer:atl-cs-001.litwareinc.com"

The Remove-CsWebServiceConfiguration cmdlet can also be run against the global collection.
In that case, however, the global collection will not be removed; instead, all the properties in that collection will be reset to their default values.
To reset the global collection, use this syntax:

-Identity global



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
Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.
Remove-CsWebServiceConfiguration accepts pipelined input of the Web Services settings object,

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.
The Remove-CsWebServiceConfiguration cmdlet accepts pipelined input of the Web Services settings object.

## OUTPUTS

###  
None.
Instead, Remove-CsWebServiceConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.

###  
None.
Instead, the Remove-CsWebServiceConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1df2f881-6594-4de7-9762-8d64b2243355(OCS.14).aspx)

[Get-CsWebServiceConfiguration]()

[New-CsWebServiceConfiguration]()

[Set-CsWebServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/1df2f881-6594-4de7-9762-8d64b2243355(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1df2f881-6594-4de7-9762-8d64b2243355(OCS.16).aspx)

