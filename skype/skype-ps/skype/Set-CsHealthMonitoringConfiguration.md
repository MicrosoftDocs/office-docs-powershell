---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsHealthMonitoringConfiguration
schema: 2.0.0
---

# Set-CsHealthMonitoringConfiguration

## SYNOPSIS
Modifies an existing collection of health monitoring configuration settings.
These settings enable administrators to run quality assurance tests without having to supply the user names and passwords for the required test accounts.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsHealthMonitoringConfiguration [[-Identity] <XdsGlobalRelativeIdentity>]
 [-FirstTestSamAccountName <String>] [-FirstTestUserSipUri <String>] [-SecondTestSamAccountName <String>]
 [-SecondTestUserSipUri <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsHealthMonitoringConfiguration [-Instance <PSObject>] [-FirstTestSamAccountName <String>]
 [-FirstTestUserSipUri <String>] [-SecondTestSamAccountName <String>] [-SecondTestUserSipUri <String>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions can be conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test accounts for each of their Registrar pools.
These test accounts are a pair of user accounts that have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) When test accounts are configured for a pool, administrators can run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.
Instead, the synthetic transaction will automatically use the preconfigured test accounts when performing its checks.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator can run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts).
If you decide to conduct a synthetic transaction using actual user accounts that you will have to supply the credentials for each user.

After you have configured health monitoring configuration settings, you can modify those settings at any time by using the `Set-CsHealthMonitoringConfiguration` cmdlet.
This cmdlet provides a way for you to change either (or both) of the test accounts configured for use with a pool.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsHealthMonitoringConfiguration -Identity atl-cs-001.litwareinc.com -FirstTestUserSipUri "sip:kenmyer@litwareinc.com" -FirstTestSamAccountName "litwareinc\kenmyer"
```

The command shown in Example 1 configures the first test user assigned to the health monitoring configuration settings for the pool atl-cs-001.litwareinc.com.
In this example, the SIP address for the new test user is set to sip:kenmyer@litwareinc.com and the SamAccountName for the test user is set to kenmyer.


### -------------------------- Example 2 ------------------------
```
Get-CsHealthMonitoringConfiguration | Set-CsHealthMonitoringConfiguration -FirstTestUserSipUri "sip:kenmyer@litwareinc.com" -FirstTestSamAccountName "litwareinc\kenmyer"
```

Example 2 is a variation of the command shown in Example 1.
In this case, however, the same test user is assigned to each collection of health monitoring configuration settings in use in the organization.
To carry out this task, the command first uses the `Get-CsHealthMonitoringConfiguration` cmdlet to return a collection of all the health monitoring configuration settings.
This collection is then piped to the `Set-CsHealthMonitoringConfiguration` cmdlet, which assigns the same first test user SIP address and SamAccountName to each item in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsHealthMonitoringConfiguration | Where-Object {$_.FirstTestUserSipUri -eq "sip:pilar@litwareinc.com"} | Set-CsHealthMonitoringConfiguration -FirstTestUserSipUri "sip:kenmyer@litwareinc.com" -FirstTestSamAccountName "litwareinc\kenmyer"
```

Example 3 shows how you can do a search-and-replace for the first test user assigned to a collection of health configuration settings; in this example, the user with the SIP address sip:pilar@litwareinc.com is replaced any time that user appears as the first test user in a collection.

To do this, the command first calls the `Get-CsHealthMonitoringConfiguration` cmdlet without any additional parameters; that returns a collection of all the health monitoring configuration settings currently in use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those items where the FirstTestUserSipUri property is equal to (-eq) sip:pilar@litwareinc.com.
That filtered collection is then piped to the `Set-CsHealthMonitoringConfiguration` cmdlet, which takes each item in the collection and sets the value of the FirstTestUserSipUri property to sip:kenmyer@litwareinc.com and the value of the FirstTestSamAccountName property to kenmyer.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the pool where the health monitoring configuration settings to be modified have been assigned.
For example: `-Identity atl-cs-001.litwareinc.com`.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -FirstTestSamAccountName
SamAccountName of the first test user.
The FirstTestSamAccountName must be entered using the format domain\username; for example:

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
For example: `-FirstTestUserSipUri "sip:kenmyer@litwareinc.com"`.

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

### -SecondTestSamAccountName
SamAccountName of the second test user.
The SecondTestSamAccountName must be entered using the format domain\username; for example:

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
For example: `-FirstTestUserSipUri "sip:pilar@litwareinc.com"`.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.HealthMonitoring.HealthMonitoringSettings object.
The `Set-CsHealthMonitoringConfiguration` cmdlet accepts pipelined instances of the health monitoring configuration object.

## OUTPUTS

###  
None.
Instead, the `Set-CsHealthMonitoringConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.HealthMonitoring.HealthMonitoringSettings object.

## NOTES

## RELATED LINKS

[Get-CsHealthMonitoringConfiguration](Get-CsHealthMonitoringConfiguration.md)

[New-CsHealthMonitoringConfiguration](New-CsHealthMonitoringConfiguration.md)

[Remove-CsHealthMonitoringConfiguration](Remove-CsHealthMonitoringConfiguration.md)
