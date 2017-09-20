---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsKerberosAccountAssignment

## SYNOPSIS
Assigns a Kerberos account, which is used for Internet Information Services (IIS) authentication, to a site.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsKerberosAccountAssignment [-Identity] <XdsIdentity> [-UserAccount <String>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Skype for Business Server site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services.
SPNs provide a way for client applications to locate a particular service.

The New-CsKerberosAccountAssignment cmdlet enables you to assign a Kerberos account to a site that is currently not associated with an account.
To change a site that is already associated with a Kerberos account, use the Set-CsKerberosAccountAssignment cmdlet instead.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsKerberosAccountAssignment -UserAccount "litwareinc\kerberostest" -Identity "site:Redmond"

Enable-CsTopology
```

The commands shown in Example 1 assign a Kerberos account (litwareinc\kerberostest) to the Redmond site, then call the Enable-CsTopology cmdlet in order to enable the assignment.
To do this, the first command in the example uses the New-CsKerberosAccountAssignment cmdlet to associate the account "litwareinc\kerberostest" with the Redmond site.
The second command then calls the Enable-CsTopology cmdlet in order to create the required SPN in AD DS and enable the new assignment.



## PARAMETERS

### -Identity
Unique identifier of the site where the Kerberos account is to be assigned.
(This is the Identity of the site, not of the computer account.) For example: `-Identity "site:Redmond".`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAccount

Account name for the account to be assigned, using the format domain_name\user_name.
For example: `-UserAccount "litwareinc\kerberostest".`
The user name portion of the account (kerberostest) is a NETBIOS name and can contain a maximum of 15 characters.

Note that, despite the name UserAccount, the account is actually a computer account, not a user account.



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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsKerberosAccountAssignment cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsKerberosAccountAssignment cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.

## NOTES

## RELATED LINKS

[Get-CsKerberosAccountAssignment]()

[New-CsKerberosAccount]()

[Remove-CsKerberosAccountAssignment]()

[Set-CsKerberosAccountAssignment]()
