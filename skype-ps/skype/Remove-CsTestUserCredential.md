---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsTestUserCredential

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes the specified user from the set of users configured as watcher node test users.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Microsoft Lync Server 2013 Preview synthetic transactions to verify that Lync Server components are working as expected.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes the specified user from the set of users configured as watcher node test users.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server 2015 synthetic transactions to verify that Skype for Business Server 2015 components are working as expected.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsTestUserCredential [-SipAddress] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

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

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTestUserCredential"}

Lync Server Control Panel: The functions carried out by the Remove-CsTestUserCredential cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

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

Skype for Business Server Control Panel: The functions carried out by the Remove-CsTestUserCredential cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the user with the SIP address sip:kenmyer@litwareinc.com from the collection of users configured as watcher node test users.

Remove-CsTestUserCredential "sip:kenmyer@litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the user with the SIP address sip:kenmyer@litwareinc.com from the collection of users configured as watcher node test users.

Remove-CsTestUserCredential "sip:kenmyer@litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 remove all the users who have configured as watcher node test users.
(Note that this does not delete the user accounts; it merely deletes their status as watcher node test users.) To do this, the first command in the example sets the value of the Windows PowerShell $ErrorActionPreference variable to "SilentlyContinue"; this suppresses the display of an error message that would otherwise appear any time the Remove-CsTestUserCredential cmdlet tried to remove test credentials from user who has not been configured as a watcher node test user.

With error messages suppressed, the second command in the example uses the Get-CsUser cmdlet to return a collection of all the users who have been enabled for Lync Server 2013 Preview.
This collection is then piped to the ForEach-Object cmdlet.
ForEach-Object loops through each user account in the collection, running Remove-CsTestUserCredential against each account in order to remove that user as a watcher node test user.

The final command in the example resets the value of $ErrorActionPreference to "Continue".

$ErrorActionPreference = "SilentlyContinue"

Get-CsUser | ForEach-Object {Remove-CsTestUserCredential -SipAddress $_.SipAddress}

$ErrorActionPreference = "Continue"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 remove all the users who have configured as watcher node test users.
(Note that this does not delete the user accounts; it merely deletes their status as watcher node test users.) To do this, the first command in the example sets the value of the Windows PowerShell $ErrorActionPreference variable to "SilentlyContinue"; this suppresses the display of an error message that would otherwise appear any time the Remove-CsTestUserCredential cmdlet tried to remove test credentials from user who has not been configured as a watcher node test user.

With error messages suppressed, the second command in the example uses the Get-CsUser cmdlet to return a collection of all the users who have been enabled for Skype for Business Server 2015.
This collection is then piped to the ForEach-Object cmdlet.
The ForEach-Object cmdlet loops through each user account in the collection, running the Remove-CsTestUserCredential cmdlet against each account in order to remove that user as a watcher node test user.

The final command in the example resets the value of $ErrorActionPreference to "Continue".

$ErrorActionPreference = "SilentlyContinue"

Get-CsUser | ForEach-Object {Remove-CsTestUserCredential -SipAddress $_.SipAddress}

$ErrorActionPreference = "Continue"

## PARAMETERS

### -SipAddress
SIP address of the account whose test user credentials are being removed.
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
Remove-CsTestUserCredential does not accept pipelined input.

###  
None.
The Remove-CsTestUserCredential cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Remove-CsTestUserCredential deletes existing instances of the System.Management.Automation.PSCredential object.

###  
None.
Instead, the Remove-CsTestUserCredential cmdlet deletes existing instances of the System.Management.Automation.PSCredential object.

## NOTES

## RELATED LINKS

[Get-CsTestUserCredential]()

[Set-CsTestUserCredential]()

[Online Version](http://technet.microsoft.com/EN-US/library/49290251-276d-41d5-bcfd-077018d74f59(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/49290251-276d-41d5-bcfd-077018d74f59(OCS.16).aspx)

