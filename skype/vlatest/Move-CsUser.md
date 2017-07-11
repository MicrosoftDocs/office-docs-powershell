---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Move-CsUser

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Moves one or more user accounts enabled for Microsoft Lync Server 2010 to a new Registrar pool.

Below Content Applies To: Lync Server 2013

Moves one or more user accounts enabled for Lync Server to a new Registrar pool.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Moves one or more user accounts enabled for Skype for Business Server 2015 to a new Registrar pool.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

###  (Default)
```
Move-CsUser [-Identity] <UserIdParameter> [-Target] <Fqdn> [-DomainController <Fqdn>] [-ProxyPool <Fqdn>]
 [-Force] [-PassThru] [-WhatIf] [-Confirm] [-Credential <PSCredential>] [-HostedMigrationOverrideUrl <String>]
 [-IgnoreBackendStoreException] [-MoveConferenceData] [<CommonParameters>]
```

### Identity
```
Move-CsUser [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Confirm] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Force] [-HostedMigrationOverrideUrl <String>] [-IgnoreBackendStoreException]
 [-MoveConferenceData] [-PassThru] [-ProxyPool <Fqdn>] [-Report <String>] [-WhatIf] [<CommonParameters>]
```

### Users
```
Move-CsUser [-Target] <Fqdn> -UserList <String> [-ConcurrentMovesPerFE <Int32>] [-Confirm]
 [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Force] [-HostedMigrationOverrideUrl <String>]
 [-IgnoreBackendStoreException] [-MoveConferenceData] [-PassThru] [-ProxyPool <Fqdn>] [-Report <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

The Move-CsUser cmdlet enables you to move a user account enabled for Lync Server 2010 from one Registrar pool to another.
Move-CsUser affects only the user's Lync Server account location; it does not move the user's Active Directory account to a new organizational unit (OU) or other new location.

If Lync Server is coexisting with Office Communications Server 2007 R2 or Office Communications Server 2007, then the Move-CsUser cmdlet can used to move a user back from Lync Server to the legacy installation of Office Communications Server.
To move a user back to Office Communications Server, assign the fully qualified domain name (FQDN) of the legacy pool to the Target parameter.
If you do this, keep in mind that users moved back to Office Communications Server will likely experience functionality and data loss; that's because Lync Server has many more capabilities than either Office Communications Server 2007 or Office Communications Server 2007 R2.
Users moved back might also need to install previous versions of their client software, and may be required to reschedule meetings that were created when their user accounts were homed on Lync Server.

To move users from Communications Server 2007 or Communications Server 2007 R2 to Lync Server, use the Move-CsLegacyUser cmdlet.
Move-CsUser is designed to move users from one Lync Server to another Lync Server pool, or to move a user from a Lync Server pool to an Office Communications Server pool.
Move-CsLegacyUser moves users from Office Communications Server to Lync Server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Move-CsUser cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Move-CsUser"}

Below Content Applies To: Lync Server 2013

The Move-CsUser cmdlet enables you to move a user account enabled for Lync Server from one Registrar pool to another.
Move-CsUser affects only the user's Lync Server account location; it does not move the user's Active Directory account to a new organizational unit (OU) or other new location.

If Lync Server is coexisting with Office Communications Server 2007 R2 or Office Communications Server 2007, then the Move-CsUser cmdlet can used to move a user back from Lync Server to the legacy installation of Office Communications Server.
To move a user back to Office Communications Server, assign the fully qualified domain name (FQDN) of the legacy pool to the Target parameter.
If you do this, keep in mind that users moved back to Office Communications Server will likely experience functionality and data loss; that's because Lync Server has many more capabilities than either Office Communications Server 2007 or Office Communications Server 2007 R2.
Users moved back might also need to install previous versions of their client software, and may be required to reschedule meetings that were created when their user accounts were homed on Lync Server.

To move users from Communications Server 2007 or Communications Server 2007 R2 to Lync Server, use the Move-CsLegacyUser cmdlet.
Move-CsUser is designed to move users from one Lync Server to another Lync Server pool, or to move a user from a Lync Server pool to an Office Communications Server pool.
Move-CsLegacyUser moves users from Office Communications Server to Lync Server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Move-CsUser cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Move-CsUser"}

Below Content Applies To: Skype for Business Server 2015

The Move-CsUser cmdlet enables you to move a user account enabled for Skype for Business Server 2015 from one Registrar pool to another.
The Move-CsUser cmdlet affects only the user's Skype for Business Server 2015 account location; it does not move the user's Active Directory account to a new organizational unit (OU) or other new location.

If Skype for Business Server 2015 is coexisting with Office Communications Server 2007 R2 or Office Communications Server 2007, then the Move-CsUser cmdlet can used to move a user back from Skype for Business Server 2015 to the legacy installation of Office Communications Server.
To move a user back to Office Communications Server, assign the fully qualified domain name (FQDN) of the legacy pool to the Target parameter.
If you do this, keep in mind that users moved back to Office Communications Server will likely experience functionality and data loss; that's because Skype for Business Server 2015 has many more capabilities than either Office Communications Server 2007 or Office Communications Server 2007 R2.
Users moved back might also need to install previous versions of their client software, and may be required to reschedule meetings that were created when their user accounts were homed on Skype for Business Server 2015.

To move users from Communications Server 2007 or Communications Server 2007 R2 to Skype for Business Server 2015, use the Move-CsLegacyUser cmdlet.
The Move-CsUser cmdlet is designed to move users from one Skype for Business Server 2015 to another Skype for Business Server 2015 pool, or to move a user from a Skype for Business Server 2015 pool to an Office Communications Server pool.
Move-CsLegacyUser moves users from Office Communications Server to Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com"
```

In the preceding example, Move-CsUser is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Move-CsUser is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.

Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Move-CsUser cmdlet is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.

Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Move-CsUser -Target "atl-cs-001.litwareinc.com"
```

In Example 2 all the user accounts in the Finance organizational unit (OU) are moved to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first uses Get-CsUser and the OU parameter to retrieve a collection of all the user accounts in the Finance OU.
After the data has been retrieved, the information is piped to Move-CsUser, which moves each account in the collection to the Registrar pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2 all the user accounts in the Finance organizational unit (OU) are moved to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first uses Get-CsUser and the OU parameter to retrieve a collection of all the user accounts in the Finance OU.
After the data has been retrieved, the information is piped to Move-CsUser, which moves each account in the collection to the Registrar pool atl-cs-001.litwareinc.com.

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Move-CsUser -Target "atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2 all the user accounts in the Finance organizational unit (OU) are moved to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first uses the Get-CsUser cmdlet and the OU parameter to retrieve a collection of all the user accounts in the Finance OU.
After the data has been retrieved, the information is piped to the Move-CsUser cmdlet, which moves each account in the collection to the Registrar pool atl-cs-001.litwareinc.com.

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Move-CsUser -Target "atl-cs-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com" -Force
```

In the preceding example, Move-CsUser is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.
In addition, the Force parameter is used to ensure that only the account itself is moved; user data associated with that account (such conferences that Pilar has scheduled) will not be moved but will, instead, be discarded.
The Force parameter should only be used if you have tried calling Move-CsUser without the parameter and that move failed.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, Move-CsUser is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.
In addition, the Force parameter is used to ensure that only the account itself is moved; user data associated with that account (such conferences that Pilar has scheduled) will not be moved but will, instead, be discarded.
The Force parameter should only be used if you have tried calling Move-CsUser without the parameter and that move failed.

Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com" -Force

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Move-CsUser cmdlet is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.
In addition, the Force parameter is used to ensure that only the account itself is moved; user data associated with that account (such conferences that Pilar has scheduled) will not be moved but will, instead, be discarded.
The Force parameter should only be used if you have tried calling the Move-CsUser cmdlet without the parameter and that move failed.

Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com" -Force

## PARAMETERS

### -Identity
Indicates the Identity of the user account to be moved.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All), Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Target
Below Content Applies To: Lync Server 2010, Lync Server 2013

The FQDN (for example, atl-cs-001.litwareinc.com) of the Registrar pool where the user account should be moved.
In addition to a Registrar pool, the Target can also be the FQDN of a legacy Office Communications Server Front End Server or a hosting provider.
Any accounts moved to a hosting provider (for example, Microsoft Lync Online 2010) will lose all their associated user data.
For example, any conferences the user has scheduled will be deleted and will not be available in Lync Online 2010.



Below Content Applies To: Skype for Business Server 2015

The FQDN (for example, atl-cs-001.litwareinc.com) of the Registrar pool where the user account should be moved.
In addition to a Registrar pool, the Target can also be the FQDN of a legacy Office Communications Server Front End Server or a hosting provider.
Any accounts moved to a hosting provider will lose all their associated user data.
For example, any conferences the user has scheduled will be deleted and will not be available in Skype for Business Online.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-cs-001) or its FQDN (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool
Below Content Applies To: Lync Server 2010

This parameter is used only for Microsoft Lync Online 2010.
It should not be used with an on-premises implementation of Lync Server.



Below Content Applies To: Lync Server 2013

This parameter is used only for Lync Online.
It should not be used with an on-premises implementation of Lync Server.



Below Content Applies To: Skype for Business Server 2015

This parameter is used only for Skype for Business Server 2015.
It should not be used with an on-premises implementation of Skype for Business Server 2015.



```yaml
Type: Fqdn
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
If present, moves the user account but deletes any associated user data (such as conferences that the user has scheduled).
If not present, both the account and the associated data are moved.

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

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being moved.
By default, the Move-CsUser cmdlet does not pass objects through the pipeline.

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
Enables you to bypass the confirmation prompt that would otherwise appear when you attempt to move a user.
To bypass the confirmation prompt, include the Confirm parameter using this syntax:

-Confirm:$False

If you would prefer to have the confirmation prompt then use this syntax:

-Confirm

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

### -Credential
Below Content Applies To: Lync Server 2013

Enables you to run the Move-CsUser cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet Help topic.



Below Content Applies To: Skype for Business Server 2015

Enables you to run the Move-CsUser cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedMigrationOverrideUrl
Below Content Applies To: Lync Server 2013

URL for the hosted migration service used when moving a user to the Office 365 version of Lync Server 2013 Preview.



Below Content Applies To: Skype for Business Server 2015

URL for the hosted migration service used when moving a user to Skype for Business Online.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreBackendStoreException
When present, instructs the computer to ignore any errors that might occur with the backend database and attempt to move the user despite those errors.

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

### -MoveConferenceData
When present, moves meeting and conference data for users being transferred to a different Registrar pool.
Note that you should not use the MoveConferenceData parameter if you are moving users as part of a disaster recovery procedure.
Instead, you should rely on the backup service for moving conference data as part of a disaster recovery procedure.

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

### -UserList
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentMovesPerFE
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Identity, Users
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

###  
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Move-CsUser accepts a pipelined string value representing the Identity of a user account that has been enabled for Lync Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.

###  
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Move-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server 2015.
The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

###  
Move-CsUser does not return a value or object.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

###  
The Move-CsUser cmdlet does not return a value or object.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6fbdbab6-8a8c-421c-b16c-2319be4b8915(OCS.14).aspx)

[Get-CsUser]()

[Move-CsLegacyUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/6fbdbab6-8a8c-421c-b16c-2319be4b8915(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6fbdbab6-8a8c-421c-b16c-2319be4b8915(OCS.16).aspx)

