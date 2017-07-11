---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPublicProvider

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the public providers configured for use in your organization.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
Microsoft Lync Server 2010 ships with three public providers configured but not enabled: Yahoo!; AOL; and MSN.

Below Content Applies To: Lync Server 2013

Returns information about the public providers configured for use in your organization.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
Lync Server ships with three public providers configured but not enabled: Yahoo!, AIM (AOL), and Messenger (MSN).
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about the public providers configured for use in your organization.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsPublicProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsPublicProvider [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups. 
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2010.
Lync Server 2010 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with MSN, then your users will be able to exchange instant messages and presence information with anyone who has an MSN instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) The Get-CsPublicProvider cmdlet enables you to return information about the public providers that have been configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsPublicProvider cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsPublicProvider"}

Below Content Applies To: Lync Server 2013

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2013 Preview.
Lync Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Messenger (MSN), then your users will be able to exchange instant messages and presence information with anyone who has a Messenger instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) The Get-CsPublicProvider cmdlet enables you to return information about the public providers that have been configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsPublicProvider cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPublicProvider"}

Below Content Applies To: Skype for Business Server 2015

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server 2015 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Skype then your users will be able to exchange instant messages and presence information with anyone who has a Skype instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) The Get-CsPublicProvider cmdlet enables you to return information about the public providers that have been configured for use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider
```

The command shown in Example 1 returns a collection of all the public providers that are configured for use in the organization.
Calling Get-CsPublicProvider without any additional parameters always returns the complete collection of public providers.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the public providers that are configured for use in the organization.
Calling Get-CsPublicProvider without any additional parameters always returns the complete collection of public providers.

Get-CsPublicProvider

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the public providers that are configured for use in the organization.
Calling the Get-CsPublicProvider cmdlet without any additional parameters always returns the complete collection of public providers.

Get-CsPublicProvider

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider -Identity "MSN"
```

In Example 2, all the public providers that have the Identity MSN are returned.
Because Identities must be unique among public providers (and among hosting providers), this command will always return, at most, a single item.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the public providers that have the Identity Messenger are returned.
Because Identities must be unique among public providers (and among hosting providers), this command will always return, at most, a single item.

Get-CsPublicProvider -Identity "Messenger"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the public providers that have the Identity Skype are returned.
Because Identities must be unique among public providers (and among hosting providers), this command will always return, at most, a single item.

Get-CsPublicProvider -Identity "Skype"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider -Filter W*
```

The preceding command returns all the public providers that have an Identity that begins with the letter W.
This is done by including the Filter parameter and the filter value "W*".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns all the public providers that have an Identity that begins with the letter W.
This is done by including the Filter parameter and the filter value "W*".

Get-CsPublicProvider -Filter W*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns all the public providers that have an Identity that begins with the letter W.
This is done by including the Filter parameter and the filter value "W*".

Get-CsPublicProvider -Filter W*

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False}
```

The command shown in Example 4 returns a collection of all the public providers that are currently disabled.
To do this, the command first calls Get-CsPublicProvider to return a collection of all the public providers configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns a collection of all the public providers that are currently disabled.
To do this, the command first calls Get-CsPublicProvider to return a collection of all the public providers configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.

Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns a collection of all the public providers that are currently disabled.
To do this, the command first calls the Get-CsPublicProvider cmdlet to return a collection of all the public providers configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.

Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable"}
```

The preceding command returns all the public providers where the VerificationLevel property is set to either AlwaysUnverifiable or UseSourceVerification.
(Verification levels can be set to AlwaysUnverifiable; UseSourceVerification; or AlwaysVerifiable.) To perform this task, the command first calls Get-CsPublicProvider to return a collection of all the public providers configured for use in the organization.
This collection is then piped to Where-Object, which picks out only those providers where the VerificationLevel property is not equal to AlwaysVerifiable.
The net effect: only providers where the VerificationLevel property is set to either AlwaysUnverifiable or UseSourceVerification will be selected.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 returns all the public providers where the VerificationLevel property is set to either AlwaysUnverifiable or UseSourceVerification.
(Verification levels can be set to AlwaysUnverifiable; UseSourceVerification; or AlwaysVerifiable.) To perform this task, the command first calls Get-CsPublicProvider to return a collection of all the public providers configured for use in the organization.
This collection is then piped to Where-Object, which picks out only those providers where the VerificationLevel property is not equal to AlwaysVerifiable.
The net effect: only providers where the VerificationLevel property is set to either AlwaysUnverifiable or UseSourceVerification will be selected.

Get-CsPublicProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 returns all the public providers where the VerificationLevel property is set to either AlwaysUnverifiable or UseSourceVerification.
(Verification levels can be set to AlwaysUnverifiable; UseSourceVerification; or AlwaysVerifiable.) To perform this task, the command first calls the Get-CsPublicProvider cmdlet to return a collection of all the public providers configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those providers where the VerificationLevel property is not equal to AlwaysVerifiable.
The net effect: only providers where the VerificationLevel property is set to either AlwaysUnverifiable or UseSourceVerification will be selected.

Get-CsPublicProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable"}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the public provider to be returned.
The Identity is typically the name of the web site providing the services (for example, Yahoo!; AOL; MSN; etc.).

You cannot use wildcards when specifying the Identity.
To use wildcards to return one or more public providers, use the Filter parameter instead.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the public provider to be returned.
The Identity is typically the name of the web site providing the services.

You cannot use wildcards when specifying the Identity.
To use wildcards to return one or more public providers, use the Filter parameter instead.



```yaml
Type: XdsGlobalRelativeIdentity
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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to use wildcard values in order to return one or more public providers.
For example, to return a collection of all the public providers that have an Identity that begins with the letter Y, use this syntax: -Filter "Y*".
To return a collection of all the public providers that include the string value "Windows" anywhere in their Identity, use this syntax: -Filter "*Windows*".



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcard values in order to return one or more public providers.
For example, to return a collection of all the public providers that have an Identity that begins with the letter Y, use this syntax:

-Filter "Y*"

To return a collection of all the public providers that include the string value "Windows" anywhere in their Identity, use this syntax:

-Filter "*Windows*"



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
Retrieves the public provider data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Get-CsPublicProvider does not accept pipelined input.

###  
None.
The Get-CsPublicProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
Returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c122505d-7209-4dcb-a888-5c73f58fa68a(OCS.14).aspx)

[Disable-CsPublicProvider]()

[Enable-CsPublicProvider]()

[New-CsPublicProvider]()

[Remove-CsPublicProvider]()

[Set-CsPublicProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/c122505d-7209-4dcb-a888-5c73f58fa68a(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c122505d-7209-4dcb-a888-5c73f58fa68a(OCS.16).aspx)

