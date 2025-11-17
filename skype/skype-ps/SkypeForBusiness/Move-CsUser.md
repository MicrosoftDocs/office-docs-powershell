---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/move-csuser
schema: 2.0.0
title: Move-CsUser
---

# Move-CsUser

## SYNOPSIS

Moves one or more user accounts enabled for Skype for Business Server to TeamsOnly (or the reverse). This cmdlet also can be used to move on-premises users from one pool to another.

## SYNTAX

### Identity (Default)
```
Move-CsUser [-Identity] <UserIdParameter> [-Credential <PSCredential>] [-Target] <Fqdn> [-MoveToTeams]
 [-HostedMigrationOverrideUrl <String>] [-TenantAdminUserName <String>] [-BypassAudioConferencingCheck]
 [-BypassEnterpriseVoiceCheck] [-AccessTokens <String[]>] [-MoveConferenceData] [-Report <String>] [-Force]
 [-UseLegacyMode] [-IgnoreBackendStoreException] [-ProxyPool <Fqdn>] [-DomainController <Fqdn>] [-PassThru]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Users
```
Move-CsUser [-Credential <PSCredential>] [-Target] <Fqdn> [-MoveToTeams] [-HostedMigrationOverrideUrl <String>]
 [-TenantAdminUserName <String>] [-BypassAudioConferencingCheck] [-BypassEnterpriseVoiceCheck]
 [-AccessTokens <String[]>] [-MoveConferenceData] -UserList <String> [-Report <String>] [-Force]
 [-UseLegacyMode] [-IgnoreBackendStoreException] [-ProxyPool <Fqdn>] [-DomainController <Fqdn>] [-PassThru]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

**PRE-REQUISITES steps for running Move-CsUser**

- Install or update the Microsoft Teams PowerShell module to version 6.2.1 or later

> [!IMPORTANT]
> Due to a regression issue in MicrosoftTeams module versions **greater than 7.1**, customers are advised to use module versions **7.1 or earlier** until a fix is available.
> [!NOTE]
>
> A fix for this regression is being worked on and will be included in the next Skype for Business on-premises cumulative update (CU). After applying the upcoming CU, customers can upgrade to the latest MicrosoftTeams module version.

**PRE-REQUISITES steps for** [Office 365 operated by 21Vianet](/microsoft-365/admin/services-in-china/services-in-china?view=o365-21vianet)

- Install or update the Microsoft Teams PowerShell module to version 6.2.1 or later
- Run Set-TeamsEnvironmentConfig -TeamsEnvironmentName TeamsChina

For more information, see [Set-TeamsEnvironmentConfig](https://learn.microsoft.com/powershell/module/microsoftteams/set-teamsenvironmentconfig).

The Move-CsUser cmdlet enables you to move a user account enabled for Skype for Business in the following scenarios:

- from an on-premises Skype for Business deployment to Teams-only in Microsoft 365 (or the reverse)
- from one registrar pool to another, in an on-premises Skype for Business Server deployment.

The Move-CsUser cmdlet affects only the user's Skype for Business Server account location; it does not move the user's Active Directory account to a new organizational unit (OU) or other new location.

When moving a user to the Microsoft 365 cloud to become TeamsOnly (or the reverse):

- Skype for Business hybrid must be configured. For more information, see [Deploy hybrid connectivity between Skype for Business Server and Skype for Business Online](https://learn.microsoft.com/SkypeForBusiness/skype-for-business-hybrid-solutions/deploy-hybrid-connectivity/deploy-hybrid-connectivity).
- To move a user to Microsoft 365, specify the ProxyFqdn of the hosting provider as the Target. In most cases, this is "sipfed.online.lync.com" but in specialized environments, there will be variants of this address. For more details, see [Move users between on-premises and cloud](/skypeforbusiness/hybrid/move-users-between-on-premises-and-cloud).
- When migrating from on-premises to the cloud, users are automatically assigned Teams Only mode and their meetings from on-premises are automatically converted to Teams meetings. This conversion happens regardless of which on-premises version of Skype for Business Server or Lync Server was being used. You no longer need to specify the `-MoveToTeams` switch. In fact, specifying that switch no longer has any impact. Teams Only users can still *join* meetings hosted in Skype for Business (for example, they're invited to a meeting by a Skype For Business user). However, beginning in October 2022, users moved from on-premises to Teams Only will no longer be provisioned with the Skype for Business Online infrastructure. At this point, Teams Only users can join Skype for Business meetings, but only anonymously. For more information, see [Skype for Business Online retirement](/microsoftteams/skype-for-business-online-retirement).
- When migrating from on-premises to the cloud, contacts from Skype for Business Server are migrated to the cloud (unless you use the `-Force` switch in the Move-CsUser command) and become available in Teams after the move is complete and the user logs on to Teams. To ensure these contacts are migrated to Teams, the migrated user must sign in to Teams within 30 days of being moved from on-premises to Teams Only. For details, see [Guidance for Organizations with on-premises deployments of Skype for Business Server](/microsoftteams/skype-for-business-online-retirement#guidance-for-organizations-with-on-premises-deployments-of-skype-for-business-server).
- If you receive an error while running this cmdlet about multiple federated Edge pools, Skype for Business Federation can only be enabled for a single Edge pool. If you have multiple Edge pools, select one to use as the federating Edge pool.

> [!NOTE]
> - Moving users from On-Premises to Teams requires TLS 1.2. TLS 1.0 and TLS 1.1 have been deprecated. Please visit [Disabling TLS 1.0 and 1.1 for Microsoft 365](/microsoft-365/compliance/tls-1.0-and-1.1-deprecation-for-office-365?view=o365-worldwide) and [Preparing for TLS 1.2 in Office 365 and Office 365 GCC](/microsoft-365/compliance/prepare-tls-1.2-in-office-365?view=o365-worldwide) for details.
> - To use Multi-Factor Authentication (MFA) with Move-CsUser requires either Skype for Business Server 2015 CU12 or any version of Skype for Business Server 2019. When using MFA do not specify the -Credential parameter. If you are using an earlier version of Skype for Business Server, you should either disable MFA and use the credential parameter, or obtain a newer version of the administrative tools for Skype for Business Server that supports MFA.

> [!NOTE]
> As of November 10, 2023, moving users from Teams to On-Premises will no longer migrate their contacts. This is mainly due to our continuous efforts to tighten security and protect customers' data. After carefully analyzing the usage patterns and performing risk assessments with the legacy infrastructure, we decided to deprecate this feature.

**MINIMUM REQUIRED SERVER VERSIONS**:

As of July 31, 2022, moving users between an on-premises deployment and the cloud requires the following minimum version of either Skype for Business Server or Lync Server. In the future, moves between on-premises and the cloud will no longer be possible if you are using a version earlier than the ones listed below. If you are still using an earlier version of Skype for Business Server, you should upgrade to the specified minimum version (or later) before July 31, 2022.

</br>
</br>

|On-premises product|Required minimum version|Required minimum build|
|---|---|---|
|Skype for Business Server 2019| CU6 |7.0.2046.385|
|Skype for Business Server 2015| CU12|6.0.9319.619|
|Lync Server 2013| CU10 with Hotfix 7|5.0.8308.1182|
||||

</br>
</br>

## EXAMPLES

### EXAMPLE 1: Move a user to Teams

```powershell
$cred=get-credential
Move-CsUser -Identity "PilarA@contoso.com" -Target "sipfed.online.lync.com" -Credential $cred
```

In Example 1, the Move-CsUser cmdlet is used to move the user account with sip address PilarA@contoso.com to Teams.
This user will now be a Teams only user.
If -Credential parameter is not specified, the admin will be prompted for credentials.
It no longer matters whether the `-MoveToTeams` switch is specified.

NOTE: The MoveToTeams switch is only available on Skype for Business Server 2019.
Organizations using other versions of Skype for Business Server must first move the user to Skype for Business Online, and then apply TeamsUpgradePolicy.

### EXAMPLE 2: Move a user to Skype for Business Online
```
$cred=get-credential
Move-CsUser -Identity PilarA@contoso.com -Target "sipfed.online.lync.com"  -Credential $cred
```

In Example 2, the Move-CsUser cmdlet is used to move the user account with sip address PilarA@contoso.com to Skype for Business Online.
This is the same cmdlet usage as example 1, except the MoveToTeams switch is not specified.

### EXAMPLE 3: Move a user to another on-premises pool
```
Move-CsUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com"
```

In Example 3, the Move-CsUser cmdlet is used to move the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.com.

### EXAMPLE 4: Move multiple users
```
Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Move-CsUser -Target "atl-cs-001.litwareinc.com"
```

In Example 4, all the user accounts in the Finance organizational unit (OU) are moved to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first uses the Get-CsUser cmdlet and the OU parameter to retrieve a collection of all the user accounts in the Finance OU.
After the data has been retrieved, the information is piped to the Move-CsUser cmdlet, which moves each account in the collection to the Registrar pool atl-cs-001.litwareinc.com.

## PARAMETERS

### -AccessTokens
{{ Fill AccessTokens Description }}

```yaml
Type: System.String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassAudioConferencingCheck

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter has been deprecated and should not be used.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassEnterpriseVoiceCheck

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

By default, if the on-premise user is configured for Enteprise Voice, moving the user to Office 365 will provision the user for Microsoft Phone System, for an additional license is required.
If you want to move such a user to Office 365 but do not want to configure them for Phone System, specify this switch to by-pass the license check.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to run the Move-CsUser cmdlet under alternate credentials, which is typically required when moving to Office 365.
To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.

```yaml
Type: System.Management.Automation.PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Microsoft.Rtc.Management.Deploy.Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

If present, moves the user account without moving contacts or meetings. Contacts and meetings are not recoverable.
If not present, both the account and the associated data are moved.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedMigrationOverrideUrl
The hosted migration service is the service in Office 365 that performs user moves.
By default, there is no need to specify a value for this parameter, as long as the hosting provider has its AutoDiscover URL properly configured.
However, a specific URL can be specified if required.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Indicates the Identity of the user account to be moved.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with who have a display name that ends with the string value " Smith".

```yaml
Type: Microsoft.Rtc.Management.AD.UserIdParameter
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -IgnoreBackendStoreException
{{ Fill IgnoreBackendStoreException Description }}

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveConferenceData

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

When present, moves meeting and conference data for users being transferred to a different Registrar pool.
Note that you should only use the MoveConferenceData parameter if you are moving users between on-premises pools and you should not use the MoveConferenceData parameter if you are moving users as part of a disaster recovery procedure.
Instead, you should rely on the backup service for moving conference data as part of a disaster recovery procedure.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveToTeams
If specified, the user will be moved to Office 365 as a Teams-only user.
This will ensure  incoming chats and calls land in the user's Teams client.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to pass a user object through the pipeline that represents the user account being moved.
By default, the Move-CsUser cmdlet does not pass objects through the pipeline.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

This is an optional parameter that can be used to specify the front-end pool for user migration.

```yaml
Type: Microsoft.Rtc.Management.Deploy.Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

A CSV file to be created with detailed information about the move. You can supply the file name if you want to create the file in the current folder, or an absolute path.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Target

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

If moving to an on-premises pool (either from another pool or from Microsoft 365), this is the FQDN (for example, atl-cs-001.litwareinc.com) of the Registrar pool where the user account should be moved.

If moving to Microsoft 365, this must be set to the ProxyFqdn value of the hosting provider. In most cases this is sipfed.online.lync.com. The value of the ProxyFqdn can be obtained using Get-CsHostingProvider

```yaml
Type: Microsoft.Rtc.Management.Deploy.Fqdn
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantAdminUserName

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This is an optional parameter that if, specified, pre-populates the username of the tenant admin when moving users to or from Office 365. This can be useful for scenarios involving smart card authentication or 2 factor auth. This parameter is only available with Skype for Business Server 2019 and CU8 for Skype for Business Server 2015. When specifying this parameter on Skype for Business Server 2015 with CU8, you must also specify the UseOAuth parameter.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseLegacyMode
{{ Fill UseLegacyMode Description }}

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserList

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

A text file with a list of users to be moved, in the following format example: "sip:user1@contoso.com,sip:user2@contoso.com,sip:user3@contoso.com". You can supply the file name if it's located in the current folder, or the absolute path to the file.

```yaml
Type: System.String
Parameter Sets: Users
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to bypass the confirmation prompt that would otherwise appear when you attempt to move a user.
To bypass the confirmation prompt, include the Confirm parameter using this syntax:

`-Confirm:$False`

If you would prefer to have the confirmation prompt then use this syntax:

`-Confirm`

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

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

[Move users between on-premises and cloud](https://learn.microsoft.com/skypeforbusiness/hybrid/move-users-between-on-premises-and-cloud)

[Configure Skype for Business hybrid](https://learn.microsoft.com/SkypeForBusiness/hybrid/configure-federation-with-skype-for-business-online)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://learn.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

[Using the Meeting Migration Service (MMS)](https://learn.microsoft.com/skypeforbusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms)

[Guidance for Organizations with on-premises deployments of Skype for Business Server](https://learn.microsoft.com/microsoftteams/skype-for-business-online-retirement#guidance-for-organizations-with-on-premises-deployments-of-skype-for-business-server)
