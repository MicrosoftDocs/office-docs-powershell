---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsHostingProvider

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes one or more of the hosting providers currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, suchMicrosoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.

Below Content Applies To: Lync Server 2013

Removes one or more of the hosting providers currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, such Microsoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Removes one or more of the hosting providers currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsHostingProvider [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups. 
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Lync 2010.
Microsoft Lync Server 2010 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization which provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your users have accounts hosted on-premises (that is, hosted on your local implementation of Lync Server 2010).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider, you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) If you decide later to terminate this relationship, you can use the Remove-CsHostingProvider cmdlet to delete the hosting provider.
When you delete a hosting provider, the provider is removed from your list of federated partners; at that point, the only way to re-establish the relationship is to recreate the provider.
If you want to temporarily suspend a relationship, use the Disable-CsHostingProvider cmdlet instead.
When a hosting provider is disabled, the provider is not deleted from the list of federated partners; instead, the provider is simply marked as disabled and communication between your organization and that provider is disabled.
To re-establish the relationship, you can use Enable-CsHostingProvider to re-enable the provider.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsHostingProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsHostingProvider"}

Below Content Applies To: Lync Server 2013

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2013 Preview.
Lync Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization which provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your users have accounts hosted on-premises (that is, hosted on your local implementation of Lync Server).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider, you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) If you decide later to terminate this relationship, you can use the Remove-CsHostingProvider cmdlet to delete the hosting provider.
When you delete a hosting provider, the provider is removed from your list of federated partners; at that point, the only way to re-establish the relationship is to recreate the provider.
If you want to temporarily suspend a relationship, use the Disable-CsHostingProvider cmdlet instead.
When a hosting provider is disabled, the provider is not deleted from the list of federated partners; instead, the provider is simply marked as disabled and communication between your organization and that provider is disabled.
To re-establish the relationship, you can use Enable-CsHostingProvider to re-enable the provider.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsHostingProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsHostingProvider"}

Below Content Applies To: Skype for Business Server 2015

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server 2015 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization which provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your users have accounts hosted on-premises (that is, hosted on your local implementation of Skype for Business Server 2015).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider, you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) If you decide later to terminate this relationship, you can use the Remove-CsHostingProvider cmdlet to delete the hosting provider.
When you delete a hosting provider, the provider is removed from your list of federated partners; at that point, the only way to re-establish the relationship is to recreate the provider.
If you want to temporarily suspend a relationship, use the Disable-CsHostingProvider cmdlet instead.
When a hosting provider is disabled, the provider is not deleted from the list of federated partners; instead, the provider is simply marked as disabled and communication between your organization and that provider is disabled.
To re-establish the relationship, you can use the Enable-CsHostingProvider cmdlet to re-enable the provider.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsHostingProvider -Identity "Fabrikam.com"
```

The command show in Example 1 deletes the hosting provider with the Identity Fabrikam.com.
After the hosting provider has been deleted, federation with Fabrikam.com (and any domains associated with Fabrikam.com) will be terminated.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command show in Example 1 deletes the hosting provider with the Identity Fabrikam.com.
After the hosting provider has been deleted, federation with Fabrikam.com (and any domains associated with Fabrikam.com) will be terminated.

Remove-CsHostingProvider -Identity "Fabrikam.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command show in Example 1 deletes the hosting provider with the Identity Fabrikam.com.
After the hosting provider has been deleted, federation with Fabrikam.com (and any domains associated with Fabrikam.com) will be terminated.

Remove-CsHostingProvider -Identity "Fabrikam.com"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Remove-CsHostingProvider
```

Example 2 deletes all of the hosting providers configured for use in the organization.
To do this, the command first uses Get-CsHostingProvider to return a collection of all the hosting providers currently in use.
That collection is then piped to Remove-CsHostingProvider, which deletes each item in the collection.
When this command completes there will no longer be any hosting providers configured for use.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all of the hosting providers configured for use in the organization.
To do this, the command first uses Get-CsHostingProvider to return a collection of all the hosting providers currently in use.
That collection is then piped to Remove-CsHostingProvider, which deletes each item in the collection.
When this command completes there will no longer be any hosting providers configured for use.

Get-CsHostingProvider | Remove-CsHostingProvider

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all of the hosting providers configured for use in the organization.
To do this, the command first uses the Get-CsHostingProvider cmdlet to return a collection of all the hosting providers currently in use.
That collection is then piped to the Remove-CsHostingProvider cmdlet, which deletes each item in the collection.
When this command completes there will no longer be any hosting providers configured for use.

Get-CsHostingProvider | Remove-CsHostingProvider

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider -Filter "*Fabrikam*" | Remove-CsHostingProvider
```

The preceding command deletes any hosting providers where the string value "Fabrikam" appears somewhere in the provider Identity.
To carry out this task, the command first calls Get-CsHostingProvider and the Filter parameter; the filter value "*Fabrikam*" limits the returned data to any hosting providers that have "Fabrikam" somewhere in the Identity.
For example, this command returns such providers as Fabrikam.com, Fabrikam.net, and FabrikamUsers.com.
The filtered collection is then piped to Remove-CsHostingProvider, which deletes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes any hosting providers where the string value "Fabrikam" appears somewhere in the provider Identity.
To carry out this task, the command first calls Get-CsHostingProvider and the Filter parameter; the filter value "*Fabrikam*" limits the returned data to any hosting providers that have "Fabrikam" somewhere in the Identity.
For example, this command returns such providers as Fabrikam.com, Fabrikam.net, and FabrikamUsers.com.
The filtered collection is then piped to Remove-CsHostingProvider, which deletes each item in the collection.

Get-CsHostingProvider -Filter "*Fabrikam*" | Remove-CsHostingProvider

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes any hosting providers where the string value "Fabrikam" appears somewhere in the provider Identity.
To carry out this task, the command first calls the Get-CsHostingProvider cmdlet and the Filter parameter; the filter value "*Fabrikam*" limits the returned data to any hosting providers that have "Fabrikam" somewhere in the Identity.
For example, this command returns such providers as Fabrikam.com, Fabrikam.net, and FabrikamUsers.com.
The filtered collection is then piped to the Remove-CsHostingProvider cmdlet, which deletes each item in the collection.

Get-CsHostingProvider -Filter "*Fabrikam*" | Remove-CsHostingProvider

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable"} | Remove-CsHostingProvider
```

In Example 4, all the hosting providers where the verification level is set to anything other than AlwaysVerifiable are deleted.
This is done by first calling Get-CsHostingProvider without any additional parameters; that returns a collection of all the hosting providers configured for use in the organization.
The resulting collection is then piped to the Where-Object cmdlet, which picks out only those providers where the VerificationLevel property is not equal to AlwaysVerifiable.
The filtered collection is then piped to Remove-CsHostingProvider, which removes each provider in that collection.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, all the hosting providers where the verification level is set to anything other than AlwaysVerifiable are deleted.
This is done by first calling Get-CsHostingProvider without any additional parameters; that returns a collection of all the hosting providers configured for use in the organization.
The resulting collection is then piped to the Where-Object cmdlet, which picks out only those providers where the VerificationLevel property is not equal to AlwaysVerifiable.
The filtered collection is then piped to Remove-CsHostingProvider, which removes each provider in that collection.

Get-CsHostingProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable"} | Remove-CsHostingProvider

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, all the hosting providers where the verification level is set to anything other than AlwaysVerifiable are deleted.
This is done by first calling the Get-CsHostingProvider cmdlet without any additional parameters; that returns a collection of all the hosting providers configured for use in the organization.
The resulting collection is then piped to the Where-Object cmdlet, which picks out only those providers where the VerificationLevel property is not equal to AlwaysVerifiable.
The filtered collection is then piped to the Remove-CsHostingProvider cmdlet, which removes each provider in that collection.

Get-CsHostingProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable"} | Remove-CsHostingProvider

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Where-Object {$_.Enabled -eq $False} | Remove-CsHostingProvider
```

The preceding command removes all the hosting providers that are current disabled.
To do this, the command first uses Get-CsHostingProvider to return a collection of all the hosting providers configured for use in the organization.
This collection is piped to Where-Object, which picks out only those providers that are disabled; that is, only those providers where the Enabled property is equal to False.
The filtered collection is then piped to Remove-CsHostingProvider which deletes each of the disabled hosting providers.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 removes all the hosting providers that are current disabled.
To do this, the command first uses Get-CsHostingProvider to return a collection of all the hosting providers configured for use in the organization.
This collection is piped to Where-Object, which picks out only those providers that are disabled; that is, only those providers where the Enabled property is equal to False.
The filtered collection is then piped to Remove-CsHostingProvider which deletes each of the disabled hosting providers.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $False} | Remove-CsHostingProvider

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 removes all the hosting providers that are current disabled.
To do this, the command first uses the Get-CsHostingProvider cmdlet to return a collection of all the hosting providers configured for use in the organization.
This collection is piped to the Where-Object cmdlet, which picks out only those providers that are disabled; that is, only those providers where the Enabled property is equal to False.
The filtered collection is then piped to the Remove-CsHostingProvider cmdlet, which deletes each of the disabled hosting providers.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $False} | Remove-CsHostingProvider

## PARAMETERS

### -Identity
Unique identifier for the hosting provider to be removed.
The Identity is a string value; the Identity might be the fully qualified domain name (FQDN) of the hosting provider (for example, fabrikam.com) or perhaps the name of the company providing the services (Fabrikam, Inc.).

```yaml
Type: XdsGlobalRelativeIdentity
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
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.
Remove-CsHostingProvider accepts pipelined instances of the hosting provider object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.
The Remove-CsHostingProvider cmdlet accepts pipelined instances of the hosting provider object.

## OUTPUTS

###  
None.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/309e472b-683c-47ed-9536-3b7aa50119d2(OCS.14).aspx)

[Disable-CsHostingProvider]()

[Enable-CsHostingProvider]()

[Get-CsHostingProvider]()

[New-CsHostingProvider]()

[Set-CsHostingProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/309e472b-683c-47ed-9536-3b7aa50119d2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/309e472b-683c-47ed-9536-3b7aa50119d2(OCS.16).aspx)

