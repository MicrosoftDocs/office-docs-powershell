---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Lock-CsClientPin
schema: 2.0.0
---

# Lock-CsClientPin

## SYNOPSIS

Enables an administrator to prevent a user from using personal identification number (PIN) authentication.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Lock-CsClientPin [-Identity] <UserIdParameter> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server enables users to connect to the system, or to join public switched telephone network (PSTN) conferences by using a telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password.
However, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

As a security measure, Skype for Business Server enables you to lock a user's PIN.
When a PIN is locked, the user will no longer be able to use that PIN to access the system or join a conference.
(However, that user will still be able to access the system and join conferences by using an application such as Skype for Business and by supplying a user name and password.) After a PIN has been locked, the only way to restore the PIN (and the user's access privileges) is for an administrator to unlock the PIN.
This can be done by using the Unlock-CsClientPin cmdlet.

The Lock-CsClientPin cmdlet enables administrators to temporarily disable the ability of a user to access the system by using PIN authentication.
PINs can also be locked by the system: if a user repeatedly fails to log on to the system, their PIN will automatically be locked and, again, will require unlocking by an administrator.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Skype for Business Server.
That means that you will not be able to run the Lock-CsClientPin cmdlet from a remote instance of Windows PowerShell; that's because your command will not be able to traverse the firewall and access the SQL Server Express database.
(However, you can still run the cmdlet locally on the Standard Edition server itself.) To run the Lock-CsClientPin cmdlet remotely you will need to manually enable the firewall exceptions for SQL Server Express.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Lock-CsClientPin -Identity "kenmyer@litwareinc.com"

```

In Example 1, the Lock-CsClientPin cmdlet is used to lock the PIN belonging to the user kenmyer@litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsUser | Get-CsClientPinInfo | Where-Object {$_.IsPinSet -eq $True} | Lock-CsClientPin
```

Example 2 uses the Lock-CsClientPin cmdlet to lock the PINs for all users who currently have a PIN assigned to them.
This is done by using the Get-CsUser cmdlet to return a collection of all the users who have been enabled for Skype for Business Server.
That collection is piped to the Get-CsClientPinInfo cmdlet, which is used, in conjunction with the Where-Object cmdlet, to return a collection of users where the IsPinSet property is equal to True.
That filtered collection is then piped to the Lock-CsClientPin cmdlet, which locks the PIN for each user in the collection.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsUser | Get-CsClientPinInfo | Where-Object {$_.PinExpirationTime -lt (Get-Date)} | Lock-CsClientPin
```

In Example 3, the Lock-CsClientPin cmdlet is used to lock the PINs for all the users who have expired PINs.
To carry out this task, the Get-CsUser cmdlet is first called in order to return a collection of all the users who have been enabled for Skype for Business Server.
This collection is then piped to the Get-CsClientPinInfo cmdlet, which is used, in conjunction with the Where-Object cmdlet, to limit the collection to users who have expired PINs.
To determine which users have expired PINs, the Where-Object cmdlet checks for accounts where the PinExpirationTime property (which indicates the date that the PIN number expires) is less than the current date.
(The current date is retrieved using the Get-Date cmdlet.) If the expiration date (for example, September 1, 2010) is less than the current date (for example, September 2, 2010), that means that the PIN has expired.
After that, the Lock-CsClientPin cmdlet is used to lock each of the expired PINs.


## PARAMETERS

### -Identity
Identity of the user account for which the PIN should be locked.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference user Identities by using the user's Active Directory distinguished name.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Lock-CsClientPin cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
The Lock-CsClientPin cmdlet does not return a value or object.
Instead, the cmdlet configures one or more instances of the Microsoft.Rtc.Management.UserPinService.PinInfoDetails object.

## NOTES

## RELATED LINKS

[Get-CsClientPinInfo](Get-CsClientPinInfo.md)

[Set-CsClientPin](Set-CsClientPin.md)

[Unlock-CsClientPin](Unlock-CsClientPin.md)

