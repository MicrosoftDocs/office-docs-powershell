---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/move-csuser
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Move-CsUser
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Move-CsUser

## SYNOPSIS

Moves one or more user accounts enabled for Skype for Business Server to TeamsOnly (or the reverse). This cmdlet also can be used to move on-premises users from one pool to another.

## SYNTAX

### (Default)

```
Move-CsUser [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Credential <PSCredential>] [-MoveToTeams] [-HostedMigrationOverrideUrl <String>] [-UseOAuth] [-BypassEnterpriseVoiceCheck] [-BypassAudioConferencingCheck] [-TenantAdminUserName] [-ProxyPool <Fqdn>] [-MoveConferenceData] [-Report <String>] [-DomainController <Fqdn>] [-Confirm] [-Force] [-PassThru] [-WhatIf] [<CommonParameters>]
```

### UserList

```
Move-CsUser -UserList <String> [-Target] <Fqdn> [-Credential <PSCredential>] [-MoveToTeams] [-HostedMigrationOverrideUrl <String>] [-UseOAuth] [-BypassEnterpriseVoiceCheck] [-BypassAudioConferencingCheck] [-TenantAdminUserName] [-ProxyPool <Fqdn>] [-MoveConferenceData] [-Report <String>] [-DomainController <Fqdn>] [-Confirm] [-Force] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The Move-CsUser cmdlet enables you to move a user account enabled for Skype for Business in the following scenarios:

- from an on-premises Skype for Business deployment to Teams-only in Microsoft 365 (or the reverse)
- from one registrar pool to another, in an on-premises Skype for Business Server deployment.

The Move-CsUser cmdlet affects only the user's Skype for Business Server account location; it does not move the user's Active Directory account to a new organizational unit (OU) or other new location.

When moving a user to the Microsoft 365 cloud to become TeamsOnly (or the reverse):

- Skype for Business hybrid must be configured. For more information, see [Deploy hybrid connectivity between Skype for Business Server and Skype for Business Online](https://docs.microsoft.com/SkypeForBusiness/skype-for-business-hybrid-solutions/deploy-hybrid-connectivity/deploy-hybrid-connectivity).
- To move a user to Microsoft 365, specify the ProxyFqdn of the hosting provider as the Target. In most cases, this is "sipfed.online.lync.com" but in specialized environments, there will be variants of this address. For more details, see [Move users between on-premises and cloud](/skypeforbusiness/hybrid/move-users-between-on-premises-and-cloud).
- When migrating from on-premises to the cloud, users are automatically assigned TeamsOnly mode and their meetings from on-premises are automatically converted to Teams meetings. This happens regardless of which on-premises version of Skype for Business Server or Lync Server is used. It is no longer necessary to specify the `-MoveToTeams` switch, and specifying this switch no longer has any impact. Teams-only users can still *join* meetings hosted in Skype for Business (which may happen if they are invited to a meeting by a user that is using Skype For Business).
- When migrating from on-premises to the cloud, contacts from Skype for Business Server are migrated to the cloud (unless -force switch is used in move-csuser) and become available in Teams after the user logs on to Teams after the move.


> [!NOTE]
>
> - Moving users between your on-premises deployment and Teams now *requires* the OAuth authentication protocol. Previously OAuth was recommended but not required.  Skype for Business Server 2019 and Skype for Business Server 2015 CU12 (KB 3061064) already require OAuth. If you are using Skype for Business Server 2015 with CU8 up to CU11, you must pass the `-UseOAuth` switch, which ensures the on-premises code authenticates using OAuth, or preferably upgrade to CU12. If you are using a version of Skype for Business Server 2015 prior to CU8, you must upgrade to CU12 or later.  If you are using Lync Server 2013, you must first upgrade to Lync Server 2013 Cumulative Update 10 Hotfix 5 (KB 2809243) or later.
> - Moving users from On-Premises to Teams requires TLS 1.2. TLS 1.0 and TLS 1.1 have been deprecated. Please visit [Disabling TLS 1.0 and 1.1 for Microsoft 365](/microsoft-365/compliance/tls-1.0-and-1.1-deprecation-for-office-365?view=o365-worldwide) and [Preparing for TLS 1.2 in Office 365 and Office 365 GCC](/microsoft-365/compliance/prepare-tls-1.2-in-office-365?view=o365-worldwide) for details. 
> - To use Multi-Factor Authentication (MFA) with Move-CsUser requires either Skype for Business Server 2015 CU12 or any version of Skype for Business Server 2019. When using MFA do not specify the -Credential paremeter. If you are using an earlier version of Skype for Business Server, you should either disable MFA and use the credential parameter, or obtain a newer version of the administrative tools for Skype for Business Server that supports MFA.

## EXAMPLES

### EXAMPLE 1: Move a user to Teams

```powershell
$cred=get-credential
Move-CsUser -Identity "PilarA@contoso.com" -Target "sipfed.online.lync.com" -Credential $cred
```

In Example 1, the Move-CsUser cmdlet is used to move the user account with sip address PilarA@contoso.com to Teams. This user will now be a Teams only user. If -Credential parameter is not specified, the admin will be prompted for credentials. It no longer matters whether the `-MoveToTeams` switch is specified.


### EXAMPLE 2: Move a user to another on-premises pool

```powershell
Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com"
```

In Example 3, the Move-CsUser cmdlet is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.

### EXAMPLE 3: Move multiple users

```powershell
Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Move-CsUser -Target "atl-cs-001.litwareinc.com"
```

In Example 4, all the user accounts in the Finance organizational unit (OU) are moved to the Registrar pool atl-cs-001.litwareinc.com in on-premises.
To carry out this task, the command first uses the Get-CsUser cmdlet and the OU parameter to retrieve a collection of all the user accounts in the Finance OU. After the data has been retrieved, the information is piped to the Move-CsUser cmdlet, which moves each account in the collection to the Registrar pool atl-cs-001.litwareinc.com.

### EXAMPLE 4: Move multiple users listed in a file

```powershell
Move-CsUser -UserList C:\Folder1\Folder2\file1.txt -Target "atl-cs-001.litwareinc.com" -Report C:\Folder1\Folder2\out.csv
```

In Example 5, all the users listed in file1.txt are moved to the the Registrar pool atl-cs-001.litwareinc.com.
Also, a detailed report is created in the out.csv file.

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

If moving to an on-premises pool (either from another pool or from Microsoft 365), this is the FQDN (for example, atl-cs-001.litwareinc.com) of the Registrar pool where the user account should be moved.

If moving to Microsoft 365, this must be set to the ProxyFqdn value of the hosting provider. In most cases this is sipfed.online.lync.com. The value of the ProxyFqdn can be obtained using Get-CsHostingProvider

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

This parameter is no longer needed. This parameter is only available with Skype for Business Server 2019 and CU8 for Skype for Business Server 2015 and previously was required to move a user *directly* to TeamsOnly in Microsoft 365. However, when using Move-CsUser, users are now always moved to TeamsOnly, whether this switch is specified or not.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019
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

The hosted migration service is the service in Office 365 that performs user moves. By default, there is no need to specify a value for this parameter, as long as the hosting provider has its AutoDiscover URL properly configured and you are using an admin account the ends in .onmicrosoft.com. If you are using a user account from on-premises that synchronized to the cloud, you must specify this parameter. See [Required administrative credentials](/skypeforbusiness/hybrid/move-users-between-on-premises-and-cloud#required-administrative-credentials).

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

### -UseOAuth

This switch is only relevant for Skype for Business Server 2015 with CU8 up to CU11.  When using those versions, this switch is now *required*. It ensures authentication between on-premises and the host migration service is based on OAuth protocol. In Skype for Business Server 2019 as well as Skype for Business Server 2015 CU12 and later, OAuth is always used hence the switch is not relevant on those versions.

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

### -BypassAudioConferencingCheck

This parameter has been deprecated and should not be used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassEnterpriseVoiceCheck

This parameter has been deprecated and should not be used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantAdminUserName

This is an optional parameter that if, specified, pre-populates the username of the tenant admin when moving users to or from Office 365. This can be useful for scenarios involving smart card authentication or 2 factor auth. This parameter is only available with Skype for Business Server 2019 and CU8 for Skype for Business Server 2015. When specifying this parameter on Skype for Business Server 2015 with CU8, you must also specify the UseOAuth parameter.

```yaml
Type: UserIdParameter
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool

This parameter has been deprecated and should not be used.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveConferenceData

When present, moves meeting and conference data for users being transferred to a different Registrar pool.
Note that you should only use the MoveConferenceData parameter if you are moving users between on-premises pools and you should not use the MoveConferenceData parameter if you are moving users as part of a disaster recovery procedure.
Instead, you should rely on the backup service for moving conference data as part of a disaster recovery procedure.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
Required: False
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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report

A CSV file to be created with detailed information about the move. You can supply the file name if you want to create the file in the current folder, or an absolute path.

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

### -UserList

A text file with a list of users to be moved, in the following format example: "sip:user1@contoso.com,sip:user2@contoso.com,sip:user3@contoso.com". You can supply the file name if it's located in the current folder, or the absolute path to the file.

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

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### String

The Move-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server.

### Microsoft.Rtc.Management.ADConnect.Schema.ADUser

The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

### None

The Move-CsUser cmdlet does not return a value or object.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

## NOTES

## RELATED LINKS

[Move users between on-premises and cloud](https://docs.microsoft.com/skypeforbusiness/hybrid/move-users-between-on-premises-and-cloud)

[Skype for Business Hybrid Solutions](https://docs.microsoft.com/SkypeForBusiness/skype-for-business-hybrid-solutions/skype-for-business-hybrid-solutions)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

[Using the Meeting Migration Service (MMS)](https://docs.microsoft.com/skypeforbusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms)
