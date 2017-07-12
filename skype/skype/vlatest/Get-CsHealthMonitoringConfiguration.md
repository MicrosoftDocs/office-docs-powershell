---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsHealthMonitoringConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the health monitoring configuration settings currently in use in your organization.
These settings enable administrators to run quality assurance tests without having to supply user names and passwords for the required test accounts.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010

Synthetic transactions are used in Microsoft Lync Server 2010 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted "manually" by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions can be conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test accounts for each of their Registrar or Director pools.
These test accounts are a pair of user accounts that have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) When test accounts have been configured for a pool, administrators can run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.
Instead, the synthetic transaction will automatically use the preconfigured test accounts when performing its checks.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator can run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts).
If you decide to conduct a synthetic transaction using actual user accounts you will have to supply the credentials for each user.

The Get-CsHealthMonitoringConfiguration cmdlet provides a way for you to retrieve information about the  health monitoring configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsHealthMonitoringConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsHealthMonitoringConfiguration"}

**Below Content Applies To:** Lync Server 2013

Synthetic transactions are used in Lync Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
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

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsHealthMonitoringConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsHealthMonitoringConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Synthetic transactions are used in Skype for Business Server 2015 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
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

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsHealthMonitoringConfiguration
```

The preceding command returns all the health monitoring configuration settings currently in use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns all the health monitoring configuration settings currently in use in your organization.

Get-CsHealthMonitoringConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns all the health monitoring configuration settings currently in use in your organization.

Get-CsHealthMonitoringConfiguration

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsHealthMonitoringConfiguration -Identity atl-cs-001.litwareinc.com
```

The command shown in Example 2 returns a single collection of health monitoring configuration settings: the settings that have the Identity atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns a single collection of health monitoring configuration settings: the settings that have the Identity atl-cs-001.litwareinc.com.

Get-CsHealthMonitoringConfiguration -Identity atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns a single collection of health monitoring configuration settings: the settings that have the Identity atl-cs-001.litwareinc.com.

Get-CsHealthMonitoringConfiguration -Identity atl-cs-001.litwareinc.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsHealthMonitoringConfiguration -Filter *.litwareinc.com
```

Example 3 returns all the health monitoring configuration settings that have been created for the domain litwareinc.com.
To do this, Get-CsHealthMonitoringConfiguration is called along with the Filter parameter; the filter value "*.litwareinc.com" ensures that only those settings that have an Identity that ends with the string value ".litwareinc.com" will be returned.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns all the health monitoring configuration settings that have been created for the domain litwareinc.com.
To do this, Get-CsHealthMonitoringConfiguration is called along with the Filter parameter; the filter value "*.litwareinc.com" ensures that only those settings that have an Identity that ends with the string value ".litwareinc.com" will be returned.

Get-CsHealthMonitoringConfiguration -Filter *.litwareinc.com

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns all the health monitoring configuration settings that have been created for the domain litwareinc.com.
To do this, the Get-CsHealthMonitoringConfiguration cmdlet is called along with the Filter parameter; the filter value "*.litwareinc.com" ensures that only those settings that have an Identity that ends with the string value ".litwareinc.com" will be returned.

Get-CsHealthMonitoringConfiguration -Filter *.litwareinc.com

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsHealthMonitoringConfiguration | Where-Object {$_.FirstTestUserSipUri -eq "sip:kenmyer@litwareinc.com" -or $_.SecondTestUserSipUri -eq " sip:kenmyer@litwareinc.com"}
```

The command shown in Example 4 returns all the health monitoring configuration settings that include the user with the SIP address sip:kenmyer@litwareinc.com as one of the test users.
To carry out this task, the command first calls Get-CsHealthMonitoringConfiguration without any additional parameters; this returns a collection of all the health monitoring configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the FirstTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com" or where the SecondTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com".
As a result, any collection of settings where Ken Myer's SIP address is used for either the first or the second test user will be returned.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns all the health monitoring configuration settings that include the user with the SIP address sip:kenmyer@litwareinc.com as one of the test users.
To carry out this task, the command first calls Get-CsHealthMonitoringConfiguration without any additional parameters; this returns a collection of all the health monitoring configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the FirstTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com" or where the SecondTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com".
As a result, any collection of settings where Ken Myer's SIP address is used for either the first or the second test user will be returned.

Get-CsHealthMonitoringConfiguration | Where-Object {$_.FirstTestUserSipUri -eq "sip:kenmyer@litwareinc.com" -or $_.SecondTestUserSipUri -eq " sip:kenmyer@litwareinc.com"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns all the health monitoring configuration settings that include the user with the SIP address sip:kenmyer@litwareinc.com as one of the test users.
To carry out this task, the command first calls the Get-CsHealthMonitoringConfiguration cmdlet without any additional parameters; this returns a collection of all the health monitoring configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the FirstTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com" or where the SecondTestUserSipUri property is equal to "sip:kenmyer@litwareinc.com".
As a result, any collection of settings where Ken Myer's SIP address is used for either the first or the second test user will be returned.

Get-CsHealthMonitoringConfiguration | Where-Object {$_.FirstTestUserSipUri -eq "sip:kenmyer@litwareinc.com" -or $_.SecondTestUserSipUri -eq " sip:kenmyer@litwareinc.com"}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of the pool where the health monitoring configuration settings have been assigned.
For example: -Identity atl-cs-001.litwareinc.com.

If this parameter is not included, then Get-CsHealthMonitoringConfiguration will return information about all the health monitoring configuration settings currently in use.



**Below Content Applies To:** Skype for Business Server 2015

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

###  
None.
Get-CsHealthMonitoringConfiguration does not accept pipelined input.

###  
None.
The Get-CsHealthMonitoringConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsHealthMonitoringConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.HealthMonitoring.HealthMonitoringSettings object.

###  
The Get-CsHealthMonitoringConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.HealthMonitoring.HealthMonitoringSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/843876f1-8aa6-4324-a981-8eded4d3b16d(OCS.14).aspx)

[New-CsHealthMonitoringConfiguration]()

[Remove-CsHealthMonitoringConfiguration]()

[Set-CsHealthMonitoringConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/843876f1-8aa6-4324-a981-8eded4d3b16d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/843876f1-8aa6-4324-a981-8eded4d3b16d(OCS.16).aspx)

