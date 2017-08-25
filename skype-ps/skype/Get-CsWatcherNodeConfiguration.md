---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsWatcherNodeConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the watcher node configuration settings in use in your organization.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Microsoft Lync Server 2013 Preview synthetic transactions to verify that Lync Server components are working as expected.
The watcher node configuration settings let you know which pools have been associated with a watcher node.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the watcher node configuration settings in use in your organization.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server 2015 synthetic transactions to verify that Skype for Business Server 2015 components are working as expected.
The watcher node configuration settings let you know which pools have been associated with a watcher node.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsWatcherNodeConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsWatcherNodeConfiguration [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

If you are using Microsoft System Center Operations Manager to monitor Lync Server 2013 Preview then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Lync Server is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

The Get-CsWatcherNodeConfiguration cmdlet returns information about all the watcher nodes that have been configured for use in your organization.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsWatcherNodeConfiguration"}

Lync Server Control Panel: The functions carried out by the Get-CsWatcherNodeConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server 2015 then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Skype for Business Server 2015 is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

The Get-CsWatcherNodeConfiguration cmdlet returns information about all the watcher nodes that have been configured for use in your organization.

Skype for Business Server Control Panel: The functions carried out by the Get-CsWatcherNodeConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the watcher nodes currently configured for use in the organization.

Get-CsWatcherNodeConfiguration

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the watcher nodes currently configured for use in the organization.

Get-CsWatcherNodeConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for the watcher node associated with the pool.

Get-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for the watcher node associated with the pool.

Get-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns information about all the watcher nodes where the test users include the user with the SIP address sip:kenmyer@litwareinc.com.
To do this, the command first uses Get-CsWatcherNodeConfiguration to return a collection of all the watcher nodes in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those nodes where the TestUsers property contains the SIP address sip:kenmyer@litwareinc.com.

Get-CsWatcherNodeConfiguration | Where-Object {$_.TestUsers -contains "sip:kenmyer@litwareinc.com"}

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns information about all the watcher nodes where the test users include the user with the SIP address sip:kenmyer@litwareinc.com.
To do this, the command first uses the Get-CsWatcherNodeConfiguration cmdlet to return a collection of all the watcher nodes in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those nodes where the TestUsers property contains the SIP address sip:kenmyer@litwareinc.com.

Get-CsWatcherNodeConfiguration | Where-Object {$_.TestUsers -contains "sip:kenmyer@litwareinc.com"}

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, information is returned for all the watcher nodes that include the PSTN test type.
To carry out this task, the command first calls Get-CsWatcherNodeConfiguration in order to return a collection of all the watcher nodes in the organization.
That collection is then piped to the Where-Object cmdlet, which selects only those watcher nodes where the ExtendedTests property includes (-matches) the string value "TestType=PSTN".

Get-CsWatcherNodeConfiguration | Where-Object {$_.ExtendedTests -match "TestType=PSTN"}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, information is returned for all the watcher nodes that include the PSTN test type.
To carry out this task, the command first calls the Get-CsWatcherNodeConfiguration cmdlet in order to return a collection of all the watcher nodes in the organization.
That collection is then piped to the Where-Object cmdlet, which selects only those watcher nodes where the ExtendedTests property includes (-matches) the string value "TestType=PSTN".

Get-CsWatcherNodeConfiguration | Where-Object {$_.ExtendedTests -match "TestType=PSTN"}

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return one or more watcher nodes.
For example, to return all of the watcher nodes for the domain litwareinc.com use this syntax:

-Filter "*.litwareinc.com"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Fully qualified domain name of the pool that the watcher node has been assigned to.
For example:

-Identity "atl-cs-001.litwareinc.com"

If this parameter is not specified then Get-CsWatcherNodeConfiguration will return information about all the watcher nodes configured for use in your organization.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name of the pool that the watcher node has been assigned to.
For example:

-Identity "atl-cs-001.litwareinc.com"

If this parameter is not specified then the Get-CsWatcherNodeConfiguration cmdlet will return information about all the watcher nodes configured for use in your organization.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the watcher node configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsWatcherNodeConfiguration does not accept pipelined input.

###  
None.
The Get-CsWatcherNodeConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsWatcherNodeConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

###  
The Get-CsWatcherNodeConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## NOTES

## RELATED LINKS

[New-CsWatcherNodeConfiguration]()

[Remove-CsWatcherNodeConfiguration]()

[Set-CsWatcherNodeConfiguration]()

[Test-CsWatcherNodeConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/20dae017-375c-4361-8d65-b56f4c09b375(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/20dae017-375c-4361-8d65-b56f4c09b375(OCS.16).aspx)

