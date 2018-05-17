---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Debug-CsUnifiedContactStore
schema: 2.0.0
---

# Debug-CsUnifiedContactStore

## SYNOPSIS
Verifies whether the contacts for a user (or group of users) are stored in the unified contacts store.

## SYNTAX

### Identity
```
Debug-CsUnifiedContactStore -Identity <UserIdParameter> [-ContactDataExportFileName <String>] [-Force]
 [<CommonParameters>]
```

### PoolFqdn
```
Debug-CsUnifiedContactStore -PoolFqdn <Fqdn> [-Force] [<CommonParameters>]
```

## DESCRIPTION
The unified contact store (introduced in Lync Server 2013 enables users to access their contact list from multiple applications, including Skype for Business, Outlook, and Outlook Web App.
This access is made available by storing contact information in a single location: Exchange.

The Debug-CsUnifiedContactStore cmdlet enables administrators to verify whether a specific user or a specific set of users (that is, all the users with accounts homed in a particular pool) have their contact lists stored in the unified contact store.
If you run the Debug-CsUnifiedContactStore cmdlet against a specific user account, the cmdlet will indicate whether that user's contacts have been moved for the unified contact store, the number of attempts that have been made to move those contacts, and the date and time when Skype for Business Server last tried to migrate the contact list.
When called against a pool, the Debug-CsUnifiedContactStore cmdlet returns data similar to this:

FrontEnd: atl-cs-001.litwareinc.com UcsDisabledCount: 44UcsAllowedCount: 129UcsMigratingCount: 11UcsMigratedCount: FailedUserData:

The Debug-CsUnifiedContactStore cmdlet, and the ContactDataExportFileName parameter, can also be used to export contact information for a user to an XML file.

The functions carried out by the Debug-CsUnifiedContactStore cmdlet are not available in the Skype for Business Server Control Panel.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Debug-CsUnifiedContactStore -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 verifies the unified contact store status for all the users who have accounts homed on the pool atl-cs-001.litwareinc.com.

### -------------------------- Example 2 --------------------------
```
Debug-CsUnifiedContactStore -Identity "kenmyer@litwareinc.com"
```

In Example 2, the unified contact store status is verified for a single user: the user with the SIP address "kenmyer@litwareinc.com".


## PARAMETERS

### -Identity
SIP address of an individual user whose unified contact store status is being verified.
(You can specify only one user per command.) For example:

`-Identity "kenmyer@litwareinc.com"`

When specifying the SIP address, the sip: prefix is optional.
This syntax will also work:

`-Identity "sip:kenmyer@litwareinc.com"`

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name of the Registrar pool whose unified contact store status is being verified.
All user accounts homed on the specified pool will be checked.
For example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: PoolFqdn
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ContactDataExportFileName
File path for the XML file that will contain the contacts for the specified user when those contacts exported from the unified contact store.
For example:

`-ContactDataExportFileName "C:\Exports\KenMyer.xml"`

Note that you must include the Identity parameter and the SIP address for the user whose contacts you want to export.
If that user has not been enabled for the unified contact store, the command will terminate and no contacts will be exported.

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any nonfatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Presence.Cmdlets.GetUcsFrontEndData

## NOTES

## RELATED LINKS

[Test-CsUnifiedContactStore](Test-CsUnifiedContactStore.md)
