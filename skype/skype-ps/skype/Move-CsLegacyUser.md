---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Move-CsLegacyUser

## SYNOPSIS

Migrates one or more user accounts from Microsoft Office Communications Server 2007 R2 to Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Move-CsLegacyUser [-Identity] <UserIdParameter> [-Target] <Fqdn> [-DomainController <Fqdn>]
 [-ExcludeArchivingPolicy] [-ExcludeConferencingPolicy] [-ExcludeDialPlan] [-ExcludeExternalAccessPolicy]
 [-ExcludePresencePolicy] [-ExcludeVoicePolicy] [-ProxyPool <Fqdn>] [-Force] [-PassThru] [-WhatIf] [-Confirm]
 [-Credential <PSCredential>] [-HostedMigrationOverrideUrl <String>] [-IgnoreBackendStoreException]
 [<CommonParameters>]
```

## DESCRIPTION

Many organizations that install Skype for Business Server are also running an earlier version of the software.
Fortunately, this does not present a problem: you can run both the latest version of the software and an earlier version of the software simultaneously.
Over time, you can then begin to migrate your configuration settings, your policies, and, finally, your user accounts to Skype for Business Server.

The Move-CsLegacyUser cmdlet not only enables you to migrate users to Skype for Business Server, but also gives you considerable control over the migration process.
For example, in its simplest form you can give the Move-CsLegacyUser cmdlet the identity of the user to be migrated and the fully qualified domain name (FQDN) of the Skype for Business Server Registrar pool where that user account will be homed; in turn, the Move-CsLegacyUser cmdlet will move the user account and will maintain any existing policies and settings that have been applied to the account.
For example, suppose Ken Myer was assigned a dial plan in Communications Server 2007 R2.
By default, when you migrate Ken's account the dial plan will be migrated as well: that means that the Move-CsLegacyUser cmdlet will automatically assign Ken Myer the Skype for Business Server equivalent of the dial plan he was previously assigned.

Of course, that will occur only if you have migrated dial plans and if there is a Skype for Business Server equivalent of the dial plan that Ken Myer was previously assigned.
Alternatively, you might have decided not to migrate dial plans.
In that case, you can call the Move-CsLegacyUser cmdlet along with the ExcludeDialPlan parameter.
When you use this parameter, dial plans are not migrated along with the user account: that means that Ken Myer's user account will be moved but he will not be assigned a dial plan.
(This will be also be the case even if you did migrate dial plans; the ExcludeDialPlan parameter prevents the migrated user account from being assigned a dial plan.) Other parameters allow you to exclude voice policies, conferencing policies, archiving policies, external access policies, and/or presence policies when migrating user accounts.

Before you can run the Merge-CsLegacyTopology, cmdlet you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
(OCSWMIBC.msi can be found on the installation DVD in the Setup folder.) After installing the Compatibility interfaces package, the Merge-CsLegacyUser cmdlet can then be called in order to move one or more user accounts.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Move-CsLegacyUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com"
```

In Example 1, the Move-CsLegacyUser cmdlet is used to migrate the user account with the Identity Pilar Ackerman to the Registrar pool atl-cs-001.litwareinc.
Because no additional parameters are included, any policies or settings previously assigned to this account will be migrated as well.
That means that, if a legacy policy (such as a dial plan) was assigned to Pilar Ackerman, she will be assigned the Skype for Business Server equivalent when her account is moved.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Move-CsLegacyUser -Identity "Pilar Ackerman" -Target "atl-cs-001.litwareinc.com" -ExcludeDialPlan
```

The command shown in Example 2 migrates Pilar Ackerman's user account, but does not migrate any dial plans previously assigned to her account.
After the account is migrated, Pilar will not have an assigned dial plan.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Move-CsLegacyUser -Target "atl-cs-001.litwareinc.com"
```

In Example 3, all the user accounts in the Finance OU are moved to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first uses the Get-CsUser cmdlet and the OU parameter to retrieve a collection of all the user accounts in the Finance OU.
After the accounts have been retrieved, the collection is piped to the Move-CsLegacyUser cmdlet, which moves each account to the new Registrar pool.
This command assumes that all the users in the Finance OU are legacy users.


### -------------------------- EXAMPLE 4 -------------------------- 
```

Get-CsUser -UnassignedUser | Move-CsLegacyUser -Target "atl-cs-001.litwareinc.com"
```

In Example 4, Move-CsLegacyUser is used to assign a Registrar pool to all of the users that have enabled for Skype for Business Server 2015 but are not currently assigned to a Registrar pool.
In this command, the Get-CsUser cmdlet is first called, along with the UnassignedUser parameter, to return a collection of all the users not currently assigned to a Registrar pool.
This collection is then piped to the Move-CsLegacyUser cmdlet, which assigns each user to the pool atl-cs-001.litwareinc.com.
This example assumes that all of the unassigned users are legacy users.


## PARAMETERS

### -Identity
Indicates the Identity of the user account to be migrated.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory Domain Services display name (for example, Ken Myer).
User Identities can also be reference by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Target
FQDN of the Registrar pool where the user account should be homed.
For example: `-Target atl-cs-001.litwareinc.com.`

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
Enables you to connect to the specified domain controller in order to move a user account.
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

### -ExcludeArchivingPolicy
When present, any archiving policies assigned to the user account are not retained when the account is migrated.

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

### -ExcludeConferencingPolicy
When present, any conferencing policies assigned to the user account are not retained when the account is migrated.

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

### -ExcludeDialPlan
When present, any dial plans assigned to the user account are not retained when the account is migrated.

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

### -ExcludeExternalAccessPolicy
When present, any external access policies assigned to the user account are not retained when the account is migrated.

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

### -ExcludePresencePolicy
When present, any presence policies assigned to the user account are not retained when the account is migrated.

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

### -ExcludeVoicePolicy
When present, any voice policies assigned to the user account are not retained when the account is migrated.

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

### -ProxyPool

This parameter is used only with Communications Server 2007 R2.
It should not be used with an on-premises implementation of Skype for Business Server.



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
Suppresses the display of any non-fatal error message that might arise when running the command.

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
By default, the Move-CsLegacyUser cmdlet does not pass objects through the pipeline.

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
Prompts you for confirmation before executing the command.

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
Enables you to run the Move-CsLegacyUser cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet Help topic.

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

URL for the hosted migration service used when moving a user to the Office 365 version of Skype for Business Server.



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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Move-CsLegacyUser cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Move-CsLegacyUser cmdlet does not return any values or objects.
Instead, the cmdlet moves instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

## NOTES

## RELATED LINKS

[Import-CsLegacyConfiguration]()

[Import-CsLegacyConferenceDirectory]()

[Merge-CsLegacyTopology]()

[Move-CsUser]()

[Set-CsUser]()
