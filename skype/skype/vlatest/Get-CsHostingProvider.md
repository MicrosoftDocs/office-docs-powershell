---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsHostingProvider

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the hosting providers configured for use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, such as Microsoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.

**Below Content Applies To:** Lync Server 2013

Returns information about the hosting providers configured for use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, such as Microsoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Get-CsHostingProvider \[\[-Identity\] \<XdsGlobalRelativeIdentity\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

Get-CsHostingProvider \[-Filter \<string\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the hosting providers configured for use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsHostingProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsHostingProvider [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsHostingProvider [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups. 
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Lync 2010.
Microsoft Lync Server 2010 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization that provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Lync Server 2010 users have accounts hosted on-premises (that is, hosted on your local implementation of Lync Server).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

The Get-CsHostingProvider cmdlet provides a way for you to return information about all the hosting providers that have been configured for use in your organization.

Note that you cannot federate with a hosting provider if your Edge Servers  are configured to use default routing rather than Domain Name System (DNS) server routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsHostingProvider cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsHostingProvider"}

**Below Content Applies To:** Lync Server 2013

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Lync.
Lync Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization that provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Lync Server users have accounts hosted on-premises (that is, hosted on your local implementation of Lync Server).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

The Get-CsHostingProvider cmdlet provides a way for you to return information about all the hosting providers that have been configured for use in your organization.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsHostingProvider cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsHostingProvider"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server 2015 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization that provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Skype for Business Server 2015 users have accounts hosted on-premises (that is, hosted on your local implementation of Skype for Business Server 2015).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

The Get-CsHostingProvider cmdlet provides a way for you to return information about all the hosting providers that have been configured for use in your organization.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider
```

The preceding command returns a collection of all the hosting providers configured for use in the organization.
Calling Get-CsHostingProvider without any additional parameters returns the complete collection of hosting providers.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns a collection of all the hosting providers configured for use in the organization.
Calling Get-CsHostingProvider without any additional parameters returns the complete collection of hosting providers.

Get-CsHostingProvider

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns a collection of all the hosting providers configured for use in the organization.
Calling the Get-CsHostingProvider cmdlet without any additional parameters returns the complete collection of hosting providers.

Get-CsHostingProvider

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider -Identity Fabrikam.com
```

Example 2 returns the hosting provider that has the Identity Fabrikam.com.
Because Identities must be unique among hosting providers, this command will never return more than a single item.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns the hosting provider that has the Identity Fabrikam.com.
Because Identities must be unique among hosting providers, this command will never return more than a single item.

Get-CsHostingProvider -Identity Fabrikam.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns the hosting provider that has the Identity Fabrikam.com.
Because Identities must be unique among hosting providers, this command will never return more than a single item.

Get-CsHostingProvider -Identity Fabrikam.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider -Filter *.org
```

The command shown in Example 3 returns a collection of all the hosting providers that have an Identity that ends with the string value ".org" (for example, fabrikam.org and contoso.org).

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns a collection of all the hosting providers that have an Identity that ends with the string value ".org" (for example, fabrikam.org and contoso.org).

Get-CsHostingProvider -Filter *.org

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns a collection of all the hosting providers that have an Identity that ends with the string value ".org" (for example, fabrikam.org and contoso.org).

Get-CsHostingProvider -Filter *.org

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True}
```

In Example 4, all the hosting providers that are currently enabled for use are returned.
To do this, Get-CsHostingProvider is first called in order to return a collection of all the hosting providers currently configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Enabled property is equal to True.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, all the hosting providers that are currently enabled for use are returned.
To do this, Get-CsHostingProvider is first called in order to return a collection of all the hosting providers currently configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Enabled property is equal to True.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, all the hosting providers that are currently enabled for use are returned.
To do this, the Get-CsHostingProvider cmdlet is first called in order to return a collection of all the hosting providers currently configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Enabled property is equal to True.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True -and $_.EnabledSharedAddressSpace -eq $True}
```

The preceding command returns all the hosting providers that have a shared address space and that host Lync Server 2010 users; by definition, that means that the command returns all the hosting providers that are part of a "split-domain" setup.
(Split domain simply means that some of your Lync Server accounts are maintained on-premises while other accounts are maintained by a hosting provider.) To carry out this task, the command first uses Get-CsHostingProvider to return a collection of all the currently configured hosting providers.
This collection is then piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the Enabled property is equal to  True; and, 2) the EnabledSharedAddressSpace property is equal to True.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 returns all the hosting providers that have a shared address space and that host Lync Server users; by definition, that means that the command returns all the hosting providers that are part of a "split-domain" setup.
(Split domain simply means that some of your Lync Server accounts are maintained on-premises while other accounts are maintained by a hosting provider.) To carry out this task, the command first uses Get-CsHostingProvider to return a collection of all the currently configured hosting providers.
This collection is then piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the Enabled property is equal to True; and, 2) the EnabledSharedAddressSpace property is equal to True.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True -and $_.EnabledSharedAddressSpace -eq $True}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 returns all the hosting providers that have a shared address space and that host Skype for Business Server 2015 users; by definition, that means that the command returns all the hosting providers that are part of a "split-domain" setup.
(Split domain simply means that some of your Skype for Business Server 2015 accounts are maintained on-premises while other accounts are maintained by a hosting provider.) To carry out this task, the command first uses the Get-CsHostingProvider cmdlet to return a collection of all the currently configured hosting providers.
This collection is then piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the Enabled property is equal to True; and, 2) the EnabledSharedAddressSpace property is equal to True.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True -and $_.EnabledSharedAddressSpace -eq $True}

### -------------------------- Example 6 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Select-Object *
```

The command shown in Example 6 displays all the property values for all the hosting providers configured for use in your organization.
By default, the property values for EnabledSharedAddressSpace and HostsOCSUsers are not displayed when you run Get-CsHostingProvider.
To see the values for these properties, the information returned by Get-CsHostingProvider is piped to the Select-Object cmdlet; the syntax "Select-Object *" instructs Get-CsHostingProvider to display all the properties and property values for the returned items.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 6 displays all the property values for all the hosting providers configured for use in your organization.
By default, the property values for EnabledSharedAddressSpace and HostsOCSUsers are not displayed when you run Get-CsHostingProvider.
To see the values for these properties, the information returned by Get-CsHostingProvider is piped to the Select-Object cmdlet; the syntax "Select-Object *" instructs Get-CsHostingProvider to display all the properties and property values for the returned items.

Get-CsHostingProvider | Select-Object *

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 6 displays all the property values for all the hosting providers configured for use in your organization.
By default, the property values for EnabledSharedAddressSpace and HostsOCSUsers are not displayed when you run the Get-CsHostingProvider cmdlet.
To see the values for these properties, the information returned by the Get-CsHostingProvider cmdlet is piped to the Select-Object cmdlet; the wildcard character (*) instructs the Select-Object cmdlet to display all the properties and property values for the returned items.

Get-CsHostingProvider | Select-Object *

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the hosting provider to be returned.
The Identity might be the fully qualified domain name (FQDN) of the hosting provider (for example, fabrikam.com) or perhaps the name of the company providing the services (Fabrikam, Inc.).

If this parameter is not specified, Get-CsHostingProvider will return a collection of all the hosting providers configured for use in your organization.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the hosting provider to be returned.
The Identity might be the fully qualified domain name (FQDN) of the hosting provider (for example, fabrikam.com) or perhaps the name of the company providing the services (Fabrikam, Inc.).

If this parameter is not specified, the Get-CsHostingProvider cmdlet will return a collection of all the hosting providers configured for use in your organization.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables you to use wildcard values to return one or more hosting providers.
For example, to return all the hosting providers that have an identity that ends with the string value ".com" use this syntax: -Filter "*.com".
To return all the hosting providers that have an Identity that begins with the string "Fabri" use this syntax: -Filter "Fabri*".



**Below Content Applies To:** Skype for Business Online

{{Fill Filter Description}}



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Retrieves the hosting provider data from the local replica of the Central Management store rather than from the Central Management store itself.



**Below Content Applies To:** Skype for Business Online

{{Fill LocalStore Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Get-CsHostingProvider does not accept pipelined input.

### None

###  
None.
The Get-CsHostingProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
Returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.

### System.Object

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/fd493022-eb53-4084-aa81-213cb5e959fc(OCS.14).aspx)

[Disable-CsHostingProvider]()

[Enable-CsHostingProvider]()

[New-CsHostingProvider]()

[Remove-CsHostingProvider]()

[Set-CsHostingProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/fd493022-eb53-4084-aa81-213cb5e959fc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/fd493022-eb53-4084-aa81-213cb5e959fc(OCS.16).aspx)

