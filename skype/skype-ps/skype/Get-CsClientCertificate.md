---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsClientCertificate
schema: 2.0.0
---

# Get-CsClientCertificate

## SYNOPSIS
Returns information about the client certificates that have been issued to a user.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsClientCertificate [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Client certificates provide an alternate way for users to be authenticated by Skype for Business Server.
Instead of providing a user name and password, users present the system with an X.509 certificate.
(This certificate must have a subject name or subject alternative name that identifies the user.) To be authenticated, users only need to type in a personal identification number (PIN); it's typically easier for mobile phone users to type in a PIN than to type in an alphanumeric user name and/or password.

The Get-CsClientCertificate cmdlet provides a way for administrators to retrieve information about the Skype for Business Server client certificates that have been issued to their users.
This information includes both the date and time that the certificate was issued in addition to the date and time when the certificate will expire.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Skype for Business Server.
That means that you will not be able to run the Get-CsClientCertificate cmdlet from a remote instance of Windows PowerShell; that's because your command will not be able to traverse the firewall and access the SQL Server Express database.
(However, you can still run the cmdlet locally on the Standard Edition server itself.) If you need to run the Get-CsClientCertificate cmdlet remotely against a Standard Edition server you must manually enable the firewall exceptions for SQL Server Express.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClientCertificate -Identity "Ken Myer"
```

The command shown in Example 1 returns all the client certificates issued to Ken Myer.

### -------------------------- Example 2 --------------------------
```
Get-CsClientCertificate -Identity "Ken Myer" | Where-Object {$_.ExpirationTime -lt "9/5/2018"}
```

Example 2 returns all the client certificates issued to Ken Myer that are set to expire before September 5, 2018.
To do this, the command first uses the Get-CsClientCertificate cmdlet to return a collection of all the client certificates issued to Ken Myer.
This collection is then piped to the Where-Object cmdlet, which picks out only those certificates where the ExpirationTime property is less than less than September 5, 2018 (9/5/2018).
The date specified in this example (9/5/2018) uses the U.S.
English format for date-time values.
Dates should be specified using a format compatible with your Regional and Language Options.

### -------------------------- Example 3 --------------------------
```
Get-CsClientCertificate -Identity "Ken Myer" | Where-Object {$_.PublicationTime -gt "1/1/2018"}
```

Example 3 returns all the client certificates that have been issued to Ken Myer since January 1, 2018.
To accomplish this task, the command first calls the Get-CsClientCertificate cmdlet to return a collection of all the client certificates issued to Ken Myer.
This collection is then piped to the Where-Object cmdlet, which selects only those certificates where the PublicationTime property is greater than January 1, 2018 (1/1/2018).

### -------------------------- Example 4 --------------------------
```
Get-CsUser | Where-Object {$_.RegistrarPool -ne $Null} | Get-CsClientCertificate
```

The command shown in Example 4 returns client certificates for all the users who have been enabled for Skype for Business Server and who have been assigned to a Registrar pool.
(An error will be returned if you try to retrieve certificate information for a user who has not been assigned to a Registrar pool).
To do this, the command first calls the Get-CsUser cmdlet without any parameters.
This collection is then piped to the Where-Object cmdlet, which selects only those users where the RegistrarPool property is not equal to a null value.
This filtered collection is then piped to the Get-CsClientCertificate cmdlet, which returns the certificates assigned to each user in the collection.


## PARAMETERS

### -Identity
Indicates the Identity of the user account with the certificate information you want to retrieve.
User Identities can be specified by using one of four formats: 1) the user's Session Initiation Protocol (SIP) address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

Wildcards cannot be used when specifying the user Identity.

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

### String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser
The Get-CsClientCertificate cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.


## OUTPUTS

### Microsoft.Rtc.Management.UserPinService.CertInfoDetails


## NOTES


## RELATED LINKS

[Revoke-CsClientCertificate](Revoke-CsClientCertificate.md)

