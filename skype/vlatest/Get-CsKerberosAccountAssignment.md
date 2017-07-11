---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsKerberosAccountAssignment

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the Kerberos account assignments configured for use in the organization.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Returns information about the Kerberos account assignments configured for use in the organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsKerberosAccountAssignment [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsKerberosAccountAssignment [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Microsoft Lync Server 2010 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Lync Server 2010 site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services (AD DS).
SPNs provide a way for client applications to locate a particular service.

The Get-CsKerberosAccountAssignment cmdlet provides a way for you to return information about the Kerberos account assignments currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsKerberosAccountAssignment cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsKerberosAccountAssignment"}

Below Content Applies To: Lync Server 2013

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Lync Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Lync Server site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services (AD DS).
SPNs provide a way for client applications to locate a particular service.

The Get-CsKerberosAccountAssignment cmdlet provides a way for you to return information about the Kerberos account assignments currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsKerberosAccountAssignment cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsKerberosAccountAssignment"}

Below Content Applies To: Skype for Business Server 2015

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server 2015 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Skype for Business Server 2015 site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services.
SPNs provide a way for client applications to locate a particular service.

The Get-CsKerberosAccountAssignment cmdlet provides a way for you to return information about the Kerberos account assignments currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsKerberosAccountAssignment
```

The command shown in Example 1 returns information about all the Kerberos account assignments currently in use in the organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the Kerberos account assignments currently in use in the organization.

Get-CsKerberosAccountAssignment

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the Kerberos account assignments currently in use in the organization.

Get-CsKerberosAccountAssignment

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsKerberosAccountAssignment -Identity "site:Redmond"
```

Example 2 returns information about a single Kerberos account assignment: the account assignment for the Redmond site.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information about a single Kerberos account assignment: the account assignment for the Redmond site.

Get-CsKerberosAccountAssignment -Identity "site:Redmond"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information about a single Kerberos account assignment: the account assignment for the Redmond site.

Get-CsKerberosAccountAssignment -Identity "site:Redmond"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsKerberosAccountAssignment -Filter "*Redmond*"
```

In Example 3, information is returned for all the Kerberos accounts that have been assigned to sites that have the string value "Redmond" somewhere in their site Identity.
To do this, the Filter parameter is included along with the filter value "*Redmond".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all the Kerberos accounts that have been assigned to sites that have the string value "Redmond" somewhere in their site Identity.
To do this, the Filter parameter is included along with the filter value "*Redmond".

Get-CsKerberosAccountAssignment -Filter "*Redmond*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all the Kerberos accounts that have been assigned to sites that have the string value "Redmond" somewhere in their site Identity.
To do this, the Filter parameter is included along with the filter value "*Redmond".

Get-CsKerberosAccountAssignment -Filter "*Redmond*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsKerberosAccountAssignment | Where-Object {$_.UserAccount -match "litwareinc"}
```

The preceding command returns information about all the Kerberos account assignments where the identity of the assigned account includes the string value "litwareinc".
To carry out this task, the command first calls Get-CsKerberosAccountAssignment without any parameters; that returns a collection of all the Kerberos accounts assignments currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those account assignments where the identity of the account includes the string value "litwareinc".
(Note that, despite the parameter name UserAccount, the account in question is actually a computer account.)

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information about all the Kerberos account assignments where the identity of the assigned account includes the string value "litwareinc".
To carry out this task, the command first calls Get-CsKerberosAccountAssignment without any parameters; that returns a collection of all the Kerberos accounts assignments currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those account assignments where the identity of the account includes the string value "litwareinc".
(Note that, despite the parameter name UserAccount, the account in question is actually a computer account.)

Get-CsKerberosAccountAssignment | Where-Object {$_.UserAccount -match "litwareinc"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information about all the Kerberos account assignments where the identity of the assigned account includes the string value "litwareinc".
To carry out this task, the command first calls the Get-CsKerberosAccountAssignment cmdlet without any parameters; that returns a collection of all the Kerberos accounts assignments currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those account assignments where the identity of the account includes the string value "litwareinc".
(Note that, despite the parameter name UserAccount, the account in question is actually a computer account.)

Get-CsKerberosAccountAssignment | Where-Object {$_.UserAccount -match "litwareinc"}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier of the site where the Kerberos account was assigned; for example: -Identity "site:Redmond".
(Note that this is the Identity of the site, not of the computer account.) You cannot use wildcards when specifying the site identity.
To employ wildcards, use the Filter parameter instead.

If neither the Identity nor the Filter parameter is included, then Get-CsKerberosAccountAssignment returns all the Kerberos account assignments configured for use in the organization.



Below Content Applies To: Skype for Business Server 2015

Unique identifier of the site where the Kerberos account was assigned; for example: -Identity "site:Redmond".
(Note that this is the Identity of the site, not of the computer account.) You cannot use wildcards when specifying the site identity.
To employ wildcards, use the Filter parameter instead.

If neither the Identity nor the Filter parameter is included, then the Get-CsKerberosAccountAssignment cmdlet returns all the Kerberos account assignments configured for use in the organization.



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
Enables you to use wildcard characters when specifying the Kerberos account assignment (or assignments) to be returned.
For example, this syntax returns all the account assignments that include the string value "Europe": -Filter "*Europe*".

You cannot use both the Identity and the Filter parameters in the same command.

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
Retrieves the Kerberos assignment data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Get-CsKerberosAccountAssignment does not accept pipelined input.

###  
None.
The Get-CsKerberosAccountAssignment cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsKerberosAccountAssignment returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.

###  
The Get-CsKerberosAccountAssignment cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6eaba274-1693-42a7-841d-513bc1153647(OCS.14).aspx)

[New-CsKerberosAccountAssignment]()

[Remove-CsKerberosAccountAssignment]()

[Set-CsKerberosAccountAssignment]()

[Online Version](http://technet.microsoft.com/EN-US/library/6eaba274-1693-42a7-841d-513bc1153647(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6eaba274-1693-42a7-841d-513bc1153647(OCS.16).aspx)

