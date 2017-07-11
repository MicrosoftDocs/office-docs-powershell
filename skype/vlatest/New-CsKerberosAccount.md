---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsKerberosAccount

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new Kerberos account used for Internet Information Services (IIS) authentication.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Creates a new Kerberos account used for Internet Information Services (IIS) authentication.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsKerberosAccount [-ContainerDN <String>] -UserAccount <String> [-Force] [-Report <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Microsoft Lync Server 2010 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Lync Server 2010 site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services (AD DS).
SPNs provide a way for client applications to locate a particular service.

Who can run this cmdlet: You must be a domain administrator in order to run the New-CsKerberosAccount cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsKerberosAccount\b"}

Below Content Applies To: Lync Server 2013

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Lync Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Lync Server site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services (AD DS).
SPNs provide a way for client applications to locate a particular service.

Who can run this cmdlet: You must be a domain administrator in order to run the New-CsKerberosAccount cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsKerberosAccount\b"}

Below Content Applies To: Skype for Business Server 2015

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server 2015 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Skype for Business Server 2015 site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services.
SPNs provide a way for client applications to locate a particular service.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsKerberosAccount -UserAccount "litwareinc\kerberostest" -ContainerDN "cn=Computers,dc=litwareinc,dc=com"

New-CsKerberosAccountAssignment -UserAccount "litwareinc\kerberostest" -Identity "site:Redmond"
Enable-CsTopology
```

The commands shown in Example 1 create a new Kerberos account (litwareinc\kerberostest), and then assign that account to the Redmond site.
To do this, the first command in the example creates an account with the account name "litwareinc\kerberostest".
This account will be created in the Computers container in the Litwareinc.com domain.
After the account has been created, the second command uses New-CsKerberosAccountAssignment to assign that Kerberos account to the Redmond site.

After you make the new account assignment, the final command calls Enable-CsTopology in order to enable the changes.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new Kerberos account (litwareinc\kerberostest), and then assign that account to the Redmond site.
To do this, the first command in the example creates an account with the account name "litwareinc\kerberostest".
This account will be created in the Computers container in the Litwareinc.com domain.
After the account has been created, the second command uses New-CsKerberosAccountAssignment to assign that Kerberos account to the Redmond site.

After you make the new account assignment, the final command calls Enable-CsTopology in order to enable the changes.

New-CsKerberosAccount -UserAccount "litwareinc\kerberostest" -ContainerDN "cn=Computers,dc=litwareinc,dc=com"

New-CsKerberosAccountAssignment -UserAccount "litwareinc\kerberostest" -Identity "site:Redmond"

Enable-CsTopology

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new Kerberos account (litwareinc\kerberostest), and then assign that account to the Redmond site.
To do this, the first command in the example creates an account with the account name "litwareinc\kerberostest".
This account will be created in the Computers container in the Litwareinc.com domain.
After the account has been created, the second command uses the New-CsKerberosAccountAssignment cmdlet to assign that Kerberos account to the Redmond site.

After you make the new account assignment, the final command calls the Enable-CsTopology cmdlet in order to enable the changes.

New-CsKerberosAccount -UserAccount "litwareinc\kerberostest" -ContainerDN "cn=Computers,dc=litwareinc,dc=com"

New-CsKerberosAccountAssignment -UserAccount "litwareinc\kerberostest" -Identity "site:Redmond"

Enable-CsTopology

## PARAMETERS

### -ContainerDN
Below Content Applies To: Lync Server 2010, Lync Server 2013

Distinguished name of the Active Directory container where the new account is to be created.
For example: -ContainerDN "ou=Finance,dc=litwareinc,dc=com".
If this parameter is not specified, then New-CsKerberosAccount will create the new account in the Computers container in Active Directory.



Below Content Applies To: Skype for Business Server 2015

Distinguished name of the Active Directory container where the new account is to be created.
For example: -ContainerDN "ou=Finance,dc=litwareinc,dc=com".
If this parameter is not specified, then the New-CsKerberosAccount cmdlet will create the new account in the Computers container in Active Directory.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAccount
Below Content Applies To: Lync Server 2010, Lync Server 2013

Account name for the new account, using the format domain_name\user_name.
For example: -UserAccount "litwareinc\kerberostest".
Note that your command will fail if the specified account already exists.

Note, too that, despite the name UserAccount, the account created by running New-CsKerberosAccount is actually a computer account, not a user account.



Below Content Applies To: Skype for Business Server 2015

Account name for the new account, using the format domain_name\user_name.
For example: -UserAccount "litwareinc\kerberostest".
Note that your command will fail if the specified account already exists.

Note, too that, despite the name UserAccount, the account created by running the New-CsKerberosAccount cmdlet is actually a computer account, not a user account.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\KerberosAccount.html".

```yaml
Type: String
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
None.
New-CsKerberosAccount does not accept pipelined input.

###  
None.
The New-CsKerberosAccount cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsKerberosAccount creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccount object.

###  
The New-CsKerberosAccount cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccount object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/67ffa1b1-0ca5-410b-81f7-2375b9dbef3c(OCS.14).aspx)

[New-CsKerberosAccountAssignment]()

[Online Version](http://technet.microsoft.com/EN-US/library/67ffa1b1-0ca5-410b-81f7-2375b9dbef3c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/67ffa1b1-0ca5-410b-81f7-2375b9dbef3c(OCS.16).aspx)

