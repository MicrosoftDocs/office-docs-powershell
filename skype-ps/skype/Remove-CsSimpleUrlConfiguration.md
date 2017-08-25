---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsSimpleUrlConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes one or more of the simple URL configuration collections currently in use in your organization.
Simple URLs make it easier for users to join meetings and conferences, as well as making it easier for Administrators to log on to the Microsoft Lync Server 2010 Control Panel.

**Below Content Applies To:** Lync Server 2013

Removes one or more of the simple URL configuration collections currently in use in your organization.
Simple URLs make it easier for users to join meetings and conferences, as well as making it easier for Administrators to log on to the Lync Server Control Panel.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes one or more of the simple URL configuration collections currently in use in your organization.
Simple URLs make it easier for users to join meetings and conferences, as well as making it easier for Administrators to log on to the Skype for Business Server Control Panel.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsSimpleUrlConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In Microsoft Office Communications Server 2007 R2, meetings had URLs similar to this:

https://imdf.litwareinc.com/Join?uri=sip%3Akenmyer%40litwareinc.com%3Bgruu%3Bopaque%3Dapp%3Aconf%3Afocus%3Aid%3A125f95a0b0184dcea706f1a0191202a8&key=EcznhLh5K5t

However, such URLs are not especially intuitive, and not easy to convey to someone else.
The simple URLs introduced in Lync Server 2010 help overcome those problems by providing users with URLs that look more like this:

https://meet.litwareinc.com/kenmyer/071200

Simple URLs are an improvement over the URLs used in Office Communications Server.
However, simple URLs are not automatically created for you; instead, you must configure the URLs yourself. 
In addition, you must also do such things as create Domain Name System (DNS) records for each URL; configure reverse proxy rules for external access; add the simple URLs to the your Front End Server certificates; and so on.

Lync Server enables you to create three different simple URLs:

Meet - Used for meetings.
You must have at least one Meet URL for each of your SIP domains.

Admin - Used to point administrators towards the Lync Server 2010 Control Panel.

Dialin - Used for the dial-in conferencing webpage.

Simple URLs are stored in simple URL configuration collections.
When you install Lync Server, a global collection is created for you; you can also create custom collections at the site scope.
This gives you the ability to use different simple URLs at each of your sites.

Simple URL configuration collections are created by using the New-CsSimpleUrlConfiguration cmdlet; you can then use additional cmdlets (such as New-CsSimpleUrlEntry and Set-CsSimpleUrlConfiguration) to populate these collections with simple URLs.
If you later decide to delete one or more of the site-scoped collections, you can do so by using the Remove-CsSimpleUrlConfiguration cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsSimpleUrlConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsSimpleUrlConfiguration"}

**Below Content Applies To:** Lync Server 2013

In Microsoft Office Communications Server 2007 R2, meetings had URLs similar to this:

https://imdf.litwareinc.com/Join?uri=sip%3Akenmyer%40litwareinc.com%3Bgruu%3Bopaque%3Dapp%3Aconf%3Afocus%3Aid%3A125f95a0b0184dcea706f1a0191202a8&key=EcznhLh5K5t

However, such URLs are not especially intuitive, and not easy to convey to someone else.
The simple URLs introduced in Lync Server 2010 help overcome those problems by providing users with URLs that look more like this:

https://meet.litwareinc.com/kenmyer/071200

Simple URLs are an improvement over the URLs used in Office Communications Server.
However, simple URLs are not automatically created for you; instead, you must configure the URLs yourself.
In addition, you must also do such things as create Domain Name System (DNS) records for each URL; configure reverse proxy rules for external access; add the simple URLs to the your Front End Server certificates; and so on.

Lync Server enables you to create three different simple URLs:

Meet - Used for meetings.
You must have at least one Meet URL for each of your SIP domains.

Admin - Used to point administrators to the Lync Server.

Dialin - Used for the dial-in conferencing webpage.

Simple URLs are stored in simple URL configuration collections.
When you install Lync Server, a global collection is created for you; you can also create custom collections at the site scope.
This gives you the ability to use different simple URLs at each of your sites.

Simple URL configuration collections are created by using the New-CsSimpleUrlConfiguration cmdlet; you can then use additional cmdlets (such as New-CsSimpleUrlEntry and Set-CsSimpleUrlConfiguration) to populate these collections with simple URLs.
If you later decide to delete one or more of the site-scoped collections, you can do so by using the Remove-CsSimpleUrlConfiguration cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsSimpleUrlConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsSimpleUrlConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

In Microsoft Office Communications Server 2007 R2, meetings had URLs similar to this:

https://imdf.litwareinc.com/Join?uri=sip%3Akenmyer%40litwareinc.com%3Bgruu%3Bopaque%3Dapp%3Aconf%3Afocus%3Aid%3A125f95a0b0184dcea706f1a0191202a8&key=EcznhLh5K5t

However, such URLs are not especially intuitive, and not easy to convey to someone else.
The simple URLs introduced in Lync Server 2010 help overcome those problems by providing users with URLs that look more like this:

https://meet.litwareinc.com/kenmyer/071200

Simple URLs are an improvement over the URLs used in Office Communications Server.
However, simple URLs are not automatically created for you; instead, you must configure the URLs yourself.
In addition, you must also do such things as create Domain Name System (DNS) records for each URL; configure reverse proxy rules for external access; add the simple URLs to the your Front End Server certificates; and so on.

Skype for Business Server 2015 enables you to create three different simple URLs:

Meet - Used for meetings.
You must have at least one Meet URL for each of your SIP domains.

Admin - Used to point administrators to the Skype for Business Server Control Panel.

Dialin - Used for the dial-in conferencing webpage.

Simple URLs are stored in simple URL configuration collections.
When you install Skype for Business Server 2015, a global collection is created for you; you can also create custom collections at the site scope.
This gives you the ability to use different simple URLs at each of your sites.

Simple URL configuration collections are created by using the New-CsSimpleUrlConfiguration cmdlet; you can then use additional cmdlets (such as the New-CsSimpleUrlEntry cmdlet and the Set-CsSimpleUrlConfiguration cmdlet) to populate these collections with simple URLs.
If you later decide to delete one or more of the site-scoped collections, you can do so by using the Remove-CsSimpleUrlConfiguration cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsSimpleUrlConfiguration -Identity "site:Redmond"
```

The command shown in Example 1 deletes the simple URL configuration collection applied to the Redmond site.
This command deletes all the simple URLs assigned to the specified site.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the simple URL configuration collection applied to the Redmond site.
This command deletes all the simple URLs assigned to the specified site.

Remove-CsSimpleUrlConfiguration -Identity "site:Redmond"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the simple URL configuration collection applied to the Redmond site.
This command deletes all the simple URLs assigned to the specified site.

Remove-CsSimpleUrlConfiguration -Identity "site:Redmond"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsSimpleUrlConfiguration -Filter "site:*" | Remove-CsSimpleUrlConfiguration
```

In Example 2, all the simple URL configuration collections applied at the site scope are deleted.
To do this, the command first uses Get-CsSimpleUrlConfiguration and the Filter parameter to return all the simple URL collections configured at the site scope; the filter value "site:*" limits the returned data to those collections that have an Identity that begins with the string value "site:".
The filtered collection is then piped to Remove-CsSimpleUrlConfiguration, which deletes each item in that collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the simple URL configuration collections applied at the site scope are deleted.
To do this, the command first uses Get-CsSimpleUrlConfiguration and the Filter parameter to return all the simple URL collections configured at the site scope; the filter value "site:*" limits the returned data to those collections that have an Identity that begins with the string value "site:".
The filtered collection is then piped to Remove-CsSimpleUrlConfiguration, which deletes each item in that collection.

Get-CsSimpleUrlConfiguration -Filter "site:*" | Remove-CsSimpleUrlConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the simple URL configuration collections applied at the site scope are deleted.
To do this, the command first uses the Get-CsSimpleUrlConfiguration cmdlet and the Filter parameter to return all the simple URL collections configured at the site scope; the filter value "site:*" limits the returned data to those collections that have an Identity that begins with the string value "site:".
The filtered collection is then piped to the Remove-CsSimpleUrlConfiguration cmdlet, which deletes each item in that collection.

Get-CsSimpleUrlConfiguration -Filter "site:*" | Remove-CsSimpleUrlConfiguration

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the collection of simple URLs to be removed.
To remove a collection from the site scope, use syntax similar to this: -Identity "site:Redmond." Note that you cannot use wildcards when specifying an Identity.

You can also run this cmdlet against the global collection by using this syntax: -Identity global.
In that case, however, the global collection will not be deleted.
Instead, all the Simple URLs within that collection will be deleted.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the collection of simple URLs to be removed.
To remove a collection from the site scope, use syntax similar to this:

-Identity "site:Redmond"

Note that you cannot use wildcards when specifying an Identity.

You can also run this cmdlet against the global collection by using this syntax:

-Identity global

In that case, however, the global collection will not be deleted.
Instead, all the Simple URLs within that collection will be deleted.



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

### -Tenant
**Below Content Applies To:** Lync Server 2010

{{Fill Tenant Description}}



**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for the Simple URL configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the Simple URL configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
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
Microsoft.Rtc.Management.WritableConfig.Settings.SimpleUrl.SimpleUrlConfiguration object.
Remove-CsSimpleUrlConfiguration accepts pipelined instances of the simple URL configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.SimpleUrl.SimpleUrlConfiguration object.
The Remove-CsSimpleUrlConfiguration cmdlet accepts pipelined instances of the simple URL configuration object.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6cf483ed-7a53-47b0-b87a-6ef70493ba32(OCS.14).aspx)

[Get-CsSimpleUrlConfiguration]()

[New-CsSimpleUrlConfiguration]()

[Set-CsSimpleUrlConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/6cf483ed-7a53-47b0-b87a-6ef70493ba32(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6cf483ed-7a53-47b0-b87a-6ef70493ba32(OCS.16).aspx)

