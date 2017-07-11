---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsTestUserCredential

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a new watcher node test user.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Microsoft Lync Server 2013 Preview synthetic transactions to verify that Lync Server components are working as expected.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Creates a new watcher node test user.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server 2015 synthetic transactions to verify that Skype for Business Server 2015 components are working as expected.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### UsePSCredential
```
Set-CsTestUserCredential [-SipAddress] <String> -Credential <PSCredential> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

### UseRawText
```
Set-CsTestUserCredential [-SipAddress] <String> -Password <String> -UserName <String> [-Confirm] [-Force]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

If you are using System Center Operations Manager in conjunction with Microsoft Lync Server 2013 Preview, you have the option of configuring "watcher node" computers.
Watcher nodes are computers that periodically (and automatically) run synthetic transactions.
Synthetic transactions are cmdlets that test various features of Lync Server; for example, there are synthetic transactions that verify that users can register with Lync Server; that users can exchange instant messages and presence information using Lync Server; that users can conduct data collaboration and application sharing conferences; and that users can make phone calls across the public switched telephone network.
As noted, these synthetic transactions run periodically and, if they fail, issue alerts notifying administrators that the system might be experiencing difficulties.

Many synthetic transactions require test users; for example, you cannot test the ability of two users to exchange instant messages unless you have a pair of user accounts and you attempt to exchange instant messages using those accounts.
When you configure a watcher node you must assign at least two test users to that node.
These test users can be any valid Active Directory user accounts that have been enabled for Lync Server 2013 Preview and have been registered as test accounts.
Accounts are registered as test accounts by using the Set-CsTestUserCredential cmdlet.
If you later decide not to use an account as a test account you can unregister the by using the Remove-CsTestUserCredential cmdlet.
This cmdlet simply prevents the account from being used as a watcher node test account; it does not delete, disable, or otherwise modify the account.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsTestUserCredential"}

Lync Server Control Panel: The functions carried out by the Set-CsTestUserCredential cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

If you are using System Center Operations Manager in conjunction with Skype for Business Server 2015, you have the option of configuring "watcher node" computers.
Watcher nodes are computers that periodically (and automatically) run synthetic transactions.
Synthetic transactions are cmdlets that test various features of Skype for Business Server 2015; for example, there are synthetic transactions that verify that users can register with Skype for Business Server 2015; that users can exchange instant messages and presence information using Skype for Business Server 2015; that users can conduct data collaboration and application sharing conferences; and that users can make phone calls across the public switched telephone network.
As noted, these synthetic transactions run periodically and, if they fail, issue alerts notifying administrators that the system might be experiencing difficulties.

Many synthetic transactions require test users; for example, you cannot test the ability of two users to exchange instant messages unless you have a pair of user accounts and you attempt to exchange instant messages using those accounts.
When you configure a watcher node you must assign at least two test users to that node.
These test users can be any valid Active Directory user accounts that have been enabled for Skype for Business Server 2015 and have been registered as test accounts.
Accounts are registered as test accounts by using the Set-CsTestUserCredential cmdlet.
If you later decide not to use an account as a test account you can unregister the by using the Remove-CsTestUserCredential cmdlet.
This cmdlet simply prevents the account from being used as a watcher node test account; it does not delete, disable, or otherwise modify the account.

Skype for Business Server Control Panel: The functions carried out by the Set-CsTestUserCredential cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 configures the user with the SIP address sip:kenmyer@litwareinc.com to be a watcher node test user.
Note that you must also supply the user name (in the form domain name\user name) and the user's password when you configure an account as a watcher node test user.

Set-CsTestUserCredential -SipAddress "sip:kenmyer@litwareinc.com" -UserName "litwareinc\kenmyer" -Password "07Apples"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 configures the user with the SIP address sip:kenmyer@litwareinc.com to be a watcher node test user.
Note that you must also supply the user name (in the form domain name\user name) and the user's password when you configure an account as a watcher node test user.

Set-CsTestUserCredential -SipAddress "sip:kenmyer@litwareinc.com" -UserName "litwareinc\kenmyer" -Password "07Apples"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in the preceding example also configure the user with the SIP address sip:kenmyer@litwareinc.com to be a watcher node test user; in this case, however, the Credential parameter is used instead of the UserName and Password parameters.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credentials object for the account litwareinc\kenmyer; that credentials object is then stored in a variable named $x.
(Note that you must supply the password for the litwareinc\kenmyer account when creating the credentials object.) The second command in the example then uses the Credential parameter and the parameter value $x to configure the test credentials.

$x = Get-Credential "litwareinc\kenmyer"

Set-CsTestUserCredential -SipAddress "sip:kenmyer@litwareinc.com" -Credential $x

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in the preceding example also configure the user with the SIP address sip:kenmyer@litwareinc.com to be a watcher node test user; in this case, however, the Credential parameter is used instead of the UserName and Password parameters.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell command-line interface credentials object for the account litwareinc\kenmyer; that credentials object is then stored in a variable named $x.
(Note that you must supply the password for the litwareinc\kenmyer account when creating the credentials object.) The second command in the example then uses the Credential parameter and the parameter value $x to configure the test credentials.

$x = Get-Credential "litwareinc\kenmyer"

Set-CsTestUserCredential -SipAddress "sip:kenmyer@litwareinc.com" -Credential $x

## PARAMETERS

### -Credential
Enables you to configure test credentials by using a Windows PowerShell credentials object rather than the Password and UserName parameters; this has the advantage of ensuring that the user password is masked when you type it onscreen.

To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet and then store the resulting object in a variable.
For example:

$x = Get-Credential "litwareinc\kenmyer"

That variable is then used as the parameter value for the Credential parameter.

```yaml
Type: PSCredential
Parameter Sets: UsePSCredential
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
Password for the account whose test user credentials are being set.
(Note that this password will be displayed onscreen in plain text.) For example:

-Password "p@ssw0rd"

You do not need to use the Password or the UserName parameters if you use the Credential parameter.

```yaml
Type: String
Parameter Sets: UseRawText
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
SIP address of the account whose test user credentials are being set.
For example:

-SipAddress "sip:kenmyer@litwareinc.com"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserName
User name of the account being configured for test credentials.
The user name can be the SamAccountName or Active Directory DisplayName; for example:

-UserName "Ken Myer"

You can also specify the UserName by using the format domain name\user name.
For example:

-UserName "litwareinc\kenmyer"

```yaml
Type: String
Parameter Sets: UseRawText
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Set-CsTestUserCredential does not accept pipelined input.

###  
None.
The Set-CsTestUserCredential cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Set-CsTestUserCredential modifies existing instances of the System.Management.Automation.PSCredential object.

###  
None.
Instead, the Set-CsTestUserCredential cmdlet modifies existing instances of the System.Management.Automation.PSCredential object.

## NOTES

## RELATED LINKS

[Get-CsTestUserCredential]()

[Remove-CsTestUserCredential]()

[Online Version](http://technet.microsoft.com/EN-US/library/e613fad9-e91b-4bce-a67d-b1c9860ab34d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e613fad9-e91b-4bce-a67d-b1c9860ab34d(OCS.16).aspx)

