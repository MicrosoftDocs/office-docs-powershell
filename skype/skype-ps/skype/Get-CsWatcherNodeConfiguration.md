---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsWatcherNodeConfiguration

## SYNOPSIS

Returns information about the watcher node configuration settings in use in your organization.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server synthetic transactions to verify that Skype for Business Server components are working as expected.
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

If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Skype for Business Server is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

The Get-CsWatcherNodeConfiguration cmdlet returns information about all the watcher nodes that have been configured for use in your organization.

Skype for Business Server Control Panel: The functions carried out by the Get-CsWatcherNodeConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsWatcherNodeConfiguration
```

The command shown in Example 1 returns information about all the watcher nodes currently configured for use in the organization.


### -------------------------- Example 2 --------------------------
```
Get-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com"
```

In Example 2, information is returned for the watcher node associated with the pool.


### -------------------------- Example 3 --------------------------
```
Get-CsWatcherNodeConfiguration | Where-Object {$_.TestUsers -contains "sip:kenmyer@litwareinc.com"}
```

The command shown in Example 3 returns information about all the watcher nodes where the test users include the user with the SIP address sip:kenmyer@litwareinc.com.
To do this, the command first uses the Get-CsWatcherNodeConfiguration cmdlet to return a collection of all the watcher nodes in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those nodes where the TestUsers property contains the SIP address sip:kenmyer@litwareinc.com.


### -------------------------- Example 4 --------------------------
```
Get-CsWatcherNodeConfiguration | Where-Object {$_.ExtendedTests -match "TestType=PSTN"}
```

In Example 4, information is returned for all the watcher nodes that include the PSTN test type.
To carry out this task, the command first calls the Get-CsWatcherNodeConfiguration cmdlet in order to return a collection of all the watcher nodes in the organization.
That collection is then piped to the Where-Object cmdlet, which selects only those watcher nodes where the ExtendedTests property includes (-matches) the string value "TestType=PSTN".



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
The Get-CsWatcherNodeConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsWatcherNodeConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## NOTES

## RELATED LINKS

[New-CsWatcherNodeConfiguration]()

[Remove-CsWatcherNodeConfiguration]()

[Set-CsWatcherNodeConfiguration]()

[Test-CsWatcherNodeConfiguration]()