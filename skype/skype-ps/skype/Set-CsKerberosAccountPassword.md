---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsKerberosAccountPassword

## SYNOPSIS
Locates each server running Web Services in a site that has been assigned a Kerberos account and then updates the Internet Information Services (IIS) configuration settings on each of those servers.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ByFqdn
```
Set-CsKerberosAccountPassword [-FromComputer] <Fqdn> [-ToComputer] <Fqdn> [-Force] [-Report <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### ByUser
```
Set-CsKerberosAccountPassword [-UserAccount] <String> [-Force] [-Report <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the `New-CsKerberosAccount` cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Skype for Business Server site is enabled by running the `Enable-CsTopology` cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services.
SPNs provide a way for client applications to locate a particular service.

After a new association has been made, the `Set-CsKerberosAccountPassword` cmdlet provides a way to modify the password assigned to the account and, equally important, update the password on every computer that uses the specified Kerberos test account for Kerberos web authentication.

In addition, the cmdlet can also use the ToComputer and FromComputer parameters to copy this configuration information from one computer to another.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsKerberosAccountPassword -UserAccount "litwareinc\kerberostest"
```

The command shown in Example 1 sets the password for the Kerberos account litwareinc\kerberostest.


### -------------------------- Example 2 ------------------------
```
Set-CsKerberosAccountPassword -FromComputer "atl-cs-001.litwareinc.com" -ToComputer "dublin-cs-001.litwareinc.com"
```

In Example 2, the Kerberos account password is copied from the computer atl-cs-001.litwareinc.com to the computer dublin-cs-001.litwareinc.com.


## PARAMETERS

### -FromComputer
Fully qualified domain name (FQDN) of the computer containing the Kerberos account's password that will be copied to another computer.
This parameter cannot be used if you use the UserAccount parameter.

```yaml
Type: Fqdn
Parameter Sets: ByFqdn
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ToComputer
FQDN of the computer where the Kerberos account password will be copied.
This parameter cannot be used if you use the UserAccount parameter.

```yaml
Type: Fqdn
Parameter Sets: ByFqdn
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAccount
Account name for the account whose password should be changed.
This account name must use the format domain_name\user_name; for example: `-UserAccount "litwareinc\kerberostest"`.

Note that, despite the name UserAccount, the account is actually a computer account, not a user account.

```yaml
Type: String
Parameter Sets: ByUser
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
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
For example: `-Report "C:\Logs\SetKerberosPassword.html"`.

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

## OUTPUTS

###  
The `Set-CsKerberosAccountPassword` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccount object.

## NOTES

## RELATED LINKS
