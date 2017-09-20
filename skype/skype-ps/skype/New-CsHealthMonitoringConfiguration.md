---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsHealthMonitoringConfiguration
schema: 2.0.0
---

# New-CsHealthMonitoringConfiguration

## SYNOPSIS

Creates a new collection of health monitoring configuration settings for use in your organization.
These settings enable administrators to run quality assurance tests without having to supply the user names and passwords for the required test accounts.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsHealthMonitoringConfiguration [-Identity] <XdsGlobalRelativeIdentity> [-FirstTestSamAccountName <String>]
 -FirstTestUserSipUri <String> [-SecondTestSamAccountName <String>] -SecondTestUserSipUri <String> [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsHealthMonitoringConfiguration -TargetFqdn <String> [-FirstTestSamAccountName <String>]
 -FirstTestUserSipUri <String> [-SecondTestSamAccountName <String>] -SecondTestUserSipUri <String> [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted "manually" by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions can be conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test accounts for each of their Registrar pools.
These test accounts are a pair of user accounts that have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) When these test accounts are configured for a pool, administrators can run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.
Instead, the synthetic transaction will automatically use the preconfigured test accounts when performing its checks.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator can run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts).
If you decide to conduct a synthetic transaction using actual user accounts you will have to supply the credentials for each user.

The New-CsHealthMonitoringConfiguration cmdlet provides a way for you to create a new health monitoring configuration settings for a Registrar or Director pool.
When creating a new collection of health monitoring configuration settings, you must specify the fully qualified domain name (FQDN) of the pool, as well as the SIP addresses of the two accounts that will serve as the pool test accounts.
(However, you do not need to provide the passwords for those test accounts.) Note that each pool can host, at most, a single collection of health monitoring configuration settings.
If you try to create a new collection for the pool atl-cs-001.litwareinc.com and this pool has already been assigned a Registrar, then your command will fail.

When you run the New-CsHealthMonitoringConfiguration cmdlet you might receive a warning if you have pools that have not been assigned test users; this might include Director pools as well as Office Communications Server pools.
These warnings can be ignored.
If you prefer, you can assign test users homed on other pools to your Director pools; that would enable you to run the Test-CsRegistration cmdlet against the Director.
However, test users cannot be assigned to Office Communications Server pools.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsHealthMonitoringConfiguration -Identity atl-cs-001.litwareinc.com -FirstTestUserSipUri "sip:kenmyer@litwareinc.com" -SecondTestUserSipUri "sip:pilar@litwareinc.com"
```

The command shown in Example 1 creates a new collection of health monitoring configuration settings for the pool atl-cs-001.litwareinc.com.
These new settings will use sip:kenmyer@litwareinc.com and sip:pilar@litwareinc.com as the preconfigured test accounts.



### -------------------------- EXAMPLE 2 -------------------------- 
```
$x = Get-CsService -Registrar | Select-Object PoolFqdn

foreach ($i in $x)

{New-CsHealthMonitoringConfiguration -Identity $i.PoolFqdn -FirstTestUserSipUri "sip:kenmyer@litwareinc.com" -SecondTestUserSipUri "sip:pilar@litwareinc.com"}

```

Example 2 creates a new collection of health monitoring configuration settings for all the Registrar pools in the organization.
To do that, the first command in the example uses the Get-Service cmdlet and the Registrar parameter to return a collection of all the Registrar pools.
This collection is then piped to the Select-Object cmdlet, which picks out only the PoolFqdn property.
(This property returns the FQDN of a Registrar pool.) These FQDNs are stored in a variable named $x.

In the second command, a foreach loop is created to loop through each Registrar pool FQDN.
For each FQDN, the New-CsHealthMonitoringConfiguration cmdlet is called to create a new collection of configuration settings, with the FQDN stored in $x used as the Identity for the new collection.
Each collection is also assigned the same two test accounts: sip:kenmyer@litwareinc.com and sip:pilar@litwareinc.com.



## PARAMETERS

### -Identity

FQDN of the pool where the health monitoring configuration settings are to be assigned (for example: `-Identity atl-cs-001.litwareinc.com`).
Your command will fail if the specified pool already hosts a collection of health monitoring configuration settings.

The Identity is equivalent to the TargetFqdn parameter.
When creating a new collection of settings, you can use either parameter.
If you leave out both parameters, the New-CsHealthMonitoringConfiguration cmdlet will prompt you to enter the Identity.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn

FQDN of the pool where the health monitoring configuration settings are to be assigned (for example: `-TargetFqdn atl-cs-001.litwareinc.com`).
Your command will fail if the specified pool already hosts a collection of health monitoring configuration settings.

The TargetFqdn is equivalent to the Identity parameter.
When creating a new collection of settings, you can use either parameter.
If you leave out both parameters, the New-CsHealthMonitoringConfiguration cmdlet will prompt you to enter the Identity.



```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstTestSamAccountName
SamAccountName of the first test user.
The FirstTestSamAccountName must be entered by using the format domain\username; for example:

`-FirstTestSamAccountName litwareinc\kenmyer`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstTestUserSipUri
SIP address of the first test user to be configured for use by this collection of health monitoring settings.
Note that the SIP address must include the sip: prefix.
For example: `-FirstTestUserSipUri "sip:kenmyer@litwareinc.com".`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondTestSamAccountName
SamAccountName of the second test user.
The SecondTestSamAccountName must be entered by using the format domain\username; for example:

`-SecondTestSamAccountName litwareinc\pilar`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondTestUserSipUri
SIP address of the second test user to be configured for use by this collection of health monitoring settings.
Note that the SIP address must include the sip: prefix.
For example: `-SecondTestUserSipUri "sip:pilar@litwareinc.com".`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsHealthMonitoringConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsHealthMonitoringConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.HealthMonitoring.HealthMonitoringSettings object.

## NOTES

## RELATED LINKS

[Get-CsHealthMonitoringConfiguration]()

[Remove-CsHealthMonitoringConfiguration]()

[Set-CsHealthMonitoringConfiguration]()

