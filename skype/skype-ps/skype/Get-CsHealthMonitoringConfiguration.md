---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsHealthMonitoringConfiguration

## SYNOPSIS
Returns information about the health monitoring configuration settings currently in use in your organization.
These settings enable administrators to run quality assurance tests without having to supply user names and passwords for the required test accounts.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsHealthMonitoringConfiguration [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsHealthMonitoringConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted "manually" by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions can be conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test accounts for each of their Registrar or Director pools.
These test accounts are a pair of user accounts that have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) When test accounts have been configured for a pool, administrators can run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.
Instead, the synthetic transaction will automatically use the preconfigured test accounts when performing its checks.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator can run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts).
If you decide to conduct a synthetic transaction using actual user accounts you will have to supply the credentials for each user.

The Get-CsHealthMonitoringConfiguration cmdlet provides a way for you to retrieve information about the health monitoring configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsHealthMonitoringConfiguration
```

Example 1 returns all the health monitoring configuration settings currently in use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsHealthMonitoringConfiguration -Identity atl-cs-001.litwareinc.com
```

The command shown in Example 2 returns a single collection of health monitoring configuration settings: the settings that have the Identity atl-cs-001.litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsHealthMonitoringConfiguration -Filter *.litwareinc.com
```

Example 3 returns all the health monitoring configuration settings that have been created for the domain litwareinc.com.
To do this, the Get-CsHealthMonitoringConfiguration cmdlet is called along with the Filter parameter; the filter value "*.litwareinc.com" ensures that only those settings that have an Identity that ends with the string value ".litwareinc.com" will be returned.

### -------------------------- Example 4 --------------------------
```
Get-CsHealthMonitoringConfiguration | Where-Object {$_.FirstTestUserSipUri -eq "sip:kenmyer@litwareinc.com" -or $_.SecondTestUserSipUri -eq " sip:kenmyer@litwareinc.com"}
```

The command shown in Example 4 returns all the health monitoring configuration settings that include the user with the SIP address sip:kenmyer@litwareinc.com as one of the test users.
To carry out this task, the command first calls the Get-CsHealthMonitoringConfiguration cmdlet without any additional parameters; this returns a collection of all the health monitoring configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the FirstTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com" or where the SecondTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com".
As a result, any collection of settings where Ken Myer's SIP address is used for either the first or the second test user will be returned.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the pool where the health monitoring configuration settings have been assigned.
For example: -Identity atl-cs-001.litwareinc.com.

If this parameter is not included, then the Get-CsHealthMonitoringConfiguration cmdlet will return information about all the health monitoring configuration settings currently in use.

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

### -Filter
Enables you to use wildcard characters when specifying the health monitoring configuration settings to be retrieved.
For example, this syntax returns all the settings configured for the litwareinc.com domain: -Filter "*.litwareinc.com".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the health monitoring configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.HealthMonitoring.HealthMonitoringSettings


## NOTES


## RELATED LINKS

[New-CsHealthMonitoringConfiguration]()

[Remove-CsHealthMonitoringConfiguration]()

[Set-CsHealthMonitoringConfiguration]()