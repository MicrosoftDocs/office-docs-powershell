---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Unlock-CsClientPin
schema: 2.0.0
---

# Unlock-CsClientPin

## SYNOPSIS
Enables an administrator to unlock the personal identification number (PIN) for a specified user.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Unlock-CsClientPin [-Identity] <UserIdParameter> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server enables users to connect to the system or to join public switched telephone network (PSTN) conferences by using a telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password.
However, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

This is true, however, only if the user's PIN is unlocked.
If a PIN has been locked (either because the user repeatedly failed to log on or because an administrator explicitly locked the PIN), the user will not be able to access the system or join a conference by using PIN authentication.
(However, that user will still be able to use an application such as Skype for Business to log on to the system by supplying a user name and password.) If a PIN has been locked, there is only one way to restore the user's ability to access the system by using PIN authentication: the locked PIN must be unlocked by an administrator.
This can be done by using the `Unlock-CsClientPin` cmdlet.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Skype for Business Server.
That means that you will not be able to run the `Unlock-CsClientPin` cmdlet from a remote instance of Windows PowerShell; that's because your command will not be able to traverse the firewall and access the SQL Server Express database.
(However, you can still run the cmdlet locally on the Standard Edition server itself.) To run the `Unlock-CsClientPin` cmdlet remotely against a Standard Edition server you will need to manually enable the firewall exceptions for SQL Server Express.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Unlock-CsClientPin -Identity "litwareinc\kenmyer"
```

In Example 1, the `Unlock-CsClientPin` cmdlet is used to unlock the PIN belonging to the user litwareinc\kenmyer.


### -------------------------- Example 2 --------------------------
```
Get-CsUser | Get-CsClientPinInfo | Where-Object {$_.IsLockedOut -eq $True} | Unlock-CsClientPin
```

In Example 2, the `Unlock-CsClientPin` cmdlet is used to unlock all the PINs that are currently locked.
To do this, the `Get-CsUser` cmdlet is first used to return a collection of all the users who have been enabled for Skype for Business Server.
That collection is then piped to the `Get-CsClientPinInfo` cmdlet, which is used in conjunction with the `Where-Object` cmdlet to select only those users where the IsLockedOut property is equal to (-eq) to True ($True).

The resulting filtered collection is then piped to the `Unlock-CsClientPin` cmdlet, which unlocks the PIN for each user whose PIN was previously locked.


## PARAMETERS

### -Identity
Identity of the user account for which the PIN should be unlocked.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The `Unlock-CsClientPin` cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
The `Unlock-CsClientPin` cmdlet does not return a value or object.
Instead, the cmdlet configures one or more instances of the Microsoft.Rtc.Management.UserPinService.PinInfoDetails object.

## NOTES

## RELATED LINKS

[Get-CsClientPinInfo](Get-CsClientPinInfo.md)

[Lock-CsClientPin](Lock-CsClientPin.md)

[Set-CsClientPin](Set-CsClientPin.md)

