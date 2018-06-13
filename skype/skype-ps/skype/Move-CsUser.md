---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Move-CsUser
schema: 2.0.0
---

# Move-CsUser

## SYNOPSIS

Moves one or more user accounts enabled for Skype for Business Server to a new Registrar pool, or to Office 365 (either to Teams or Skype for Business Online).


## SYNTAX

###  (Default)
```
Move-CsUser [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Credential <PSCredential>] [MoveToTeams] [-HostedMigrationOverrideUrl <String>] [-Force] [-PassThru] [-WhatIf] [BypassEnterpriseVoiceCheck] [BypassAudioConferencingCheck] [TenantAdminUserName] [-Confirm] [<CommonParameters>]
```

### Identity
```
Move-CsUser [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Credential <PSCredential>] [MoveToTeams]  [-PassThru] [-Force] [-HostedMigrationOverrideUrl <String>] [BypassEnterpriseVoiceCheck] [BypassAudioConferencingCheck] [TenantAdminUserName] [-Confirm] [-Report <String>] [-WhatIf] [<CommonParameters>]
```

### Users
```
Move-CsUser -UserList <String> [-Target] <Fqdn> [-Credential <PSCredential>] [MoveToTeams] [-HostedMigrationOverrideUrl <String>] [BypassEnterpriseVoiceCheck] [BypassAudioConferencingCheck] [TenantAdminUserName] [-Confirm][-Report <String>]  [-Force]  [-PassThru] 
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The Move-CsUser cmdlet enables you to move a user account enabled for Skype for Business in the following scenarios:
 - from an on-premises Skype for Business deployment to Teams-only in Office 365 (or the reverse)
 - from an on-premises Skype for Business deployment to Skype for Business Online in Office 365 (or the reverse)
 - from one registrar pool to another, in an on-premises Skype for Business Server deployment.
The Move-CsUser cmdlet affects only the user's Skype for Business Server account location; it does not move the user's Active Directory account to a new organizational unit (OU) or other new location.  

When moving a user to or from Office 365 (either Skype for Business Online or Teams):
 - Skype for Business hybrid must be configured. For more information, see https://docs.microsoft.com/en-us/SkypeForBusiness/skype-for-business-hybrid-solutions/deploy-hybrid-connectivity/deploy-hybrid-connectivity
 - Contacts are moved in all cases, unless -force is specified.
 - Meetings are migrated from Skype for Business Server to Skype for Business Online for any move from Skype for Business Server. Teams- only users can still join meetings hosted in Skype for Business.
 - To move a user to Office 365, specify the ProxyFqdn of the hosting provider as the Target. In most cases, this is "sipfed.online.lync.com" but in specialized environments there will be variants of this address.
 - Moving a user to Teams is achieved by specifying the MoveToTeams switch. This performs the same operations as a move to Skype for Business Online and also applies TeamsUpgradePolicy and TeamsInteropPolicy to the online user account.




## EXAMPLES

### ------- EXAMPLE 1: Move a user to Teams----------------------- 
```

$cred=get-credential
Move-CsUser -Identity "PilarA@contoso.com" -Target "sipfed.online.lync.com" -MoveToTeams -Credential $cred
```

In Example 1, the Move-CsUser cmdlet is used to move the user account with sip address PilarA@contoso.com to Teams.  This user will now be a Teams only user. If -Credential parameter is not specified, the admin will be prompted for credentials.

NOTE: The MoveToTeams switch is only available on Skype for Business Server 2019. Organizations using other versions of Skype for Business Server must first move the user to Skype for Business Online, and then apply TeamsUpgradePolicy.

### ------- EXAMPLE 2: Move a user to Skype for Business Online ---- 
```
$cred=get-credential
Move-CsUser -Identity PilarA@contoso.com -Target "sipfed.online.lync.com"  -Credential $cred
```

In Example 2, the Move-CsUser cmdlet is used to move the user account with sip address PilarA@contoso.com to Skype for Business Online. This is the same cmdlet usage as example 1, except the MoveToTeams switch is not specified. 

### -------- EXAMPLE 3: Move a user to another on-premises pool------- 
```

Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com" 
```

In Example 3, the Move-CsUser cmdlet is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.


### --------- EXAMPLE 4: Move multiple users --------------------------- 
```

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Move-CsUser -Target "atl-cs-001.litwareinc.com"
```

In Example 4, all the user accounts in the Finance organizational unit (OU) are moved to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first uses the Get-CsUser cmdlet and the OU parameter to retrieve a collection of all the user accounts in the Finance OU. After the data has been retrieved, the information is piped to the Move-CsUser cmdlet, which moves each account in the collection to the Registrar pool atl-cs-001.litwareinc.com.



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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Target

If moving to an on-premises pool (either from another pool or from Office 365), this is the FQDN (for example, atl-cs-001.litwareinc.com) of the Registrar pool where the user account should be moved.

If moving to Office 365, this must be set to the ProxyFqdn value of the hosting provider. In most cases this is sipfed.online.lync.com. The value of the ProxyFqdn can be obtained using Get-CsHostingProvider


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```



### -MoveToTeams
If specified, the user will be moved to Office 365 as a Teams-only user. This will ensure  incoming chats and calls land in the user's Teams client.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```



### -Credential

Enables you to run the Move-CsUser cmdlet under alternate credentials, which is typically required when moving to Office 365. To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet. For details, see the Get-Credential cmdlet help topic.


```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedMigrationOverrideUrl

The hosted migration service is the service in Office 365 that performs user moves. By default, there is no need to specify a value for this parameter, as long as the hosting provider has its AutoDiscover URL properly configured. However, a specific URL can be specified if required. 



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassAudioConferencingCheck
By default, if the on-premise user is configured for dial in conferencing, moving the user to Office 365 will provision the user for Audio Conferencing, for an additional license is required.  If you want to move such a user to Office 365 but do not want to configure them for Audio Conferencing, specify this switch to by-pass the license check.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -BypassEnterpriseVoiceCheck
By default, if the on-premise user is configured for Enteprise Voice, moving the user to Office 365 will provision the user for Microsoft Phone System, for an additional license is required.  If you want to move such a user to Office 365 but do not want to configure them for Phone System, specify this switch to by-pass the license check.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantAdminUserName
This is an optional parameter that if, specified, pre-populates the username of the tenant admin when moving users to or from Office 365. This can be useful for scenarios involving smart card authentication or 2 factor auth.


```yaml
Type: UserIdParameter
Aliases:
Applicable: Skype for Business Server 2019
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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```



### -Force
If present, moves the user account without moving contacts or meetings. Contacts and meetings are not recoverable.
If not present, both the account and the associated data are moved.

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


### -Confirm
Enables you to bypass the confirmation prompt that would otherwise appear when you attempt to move a user.
To bypass the confirmation prompt, include the Confirm parameter using this syntax:

`-Confirm:$False`

If you would prefer to have the confirmation prompt then use this syntax:

`-Confirm`

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

### -Report
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Identity, Users
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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



### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS


###  
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Move-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

###  
The Move-CsUser cmdlet does not return a value or object.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

## NOTES

## RELATED LINKS

[Get-CsUser](Get-CsUser.md)

[Skype for Business Hybrid Solutions](https://docs.microsoft.com/en-us/SkypeForBusiness/skype-for-business-hybrid-solutions/skype-for-business-hybrid-solutions)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

