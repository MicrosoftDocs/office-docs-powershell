---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsWatcherNodeConfiguration
schema: 2.0.0
---

# Remove-CsWatcherNodeConfiguration

## SYNOPSIS
Removes an existing collection of watcher node configuration settings.
Watcher nodes are computers that periodically use System Center Operations Manager and Skype for Business Server synthetic transactions to verify that Skype for Business Server components are working as expected.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsWatcherNodeConfiguration [-Identity] <XdsGlobalRelativeIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server then you have the option of setting up "watcher nodes": computers that periodically and automatically, run synthetic transactions in order to verify that Skype for Business Server is working as expected.
Watcher nodes are assigned to pools and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

If you later decide to decommission a watcher node you can do so by using the `Remove-CsWatcherNodeConfiguration` cmdlet.
Alternatively, you can temporarily disable (and then later re-enable) a watcher node by using the `Set-CsWatcherNodeConfiguration` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsWatcherNodeConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 removes the watcher node configuration settings applied to the pool `atl-cs-001.litwareinc.com`.


### -------------------------- Example 2 --------------------------
```
Get-CsWatcherNodeConfiguration | Remove-CsWatcherNodeConfiguration
```

Example 2 removes all the watcher nodes configured for use in the organization.
To do this, the command first uses the `Get-CsWatcherNodeConfiguration` cmdlet to return a collection of all the watcher nodes.
This collection is then piped to the `Remove-CsWatcherNodeConfiguration` cmdlet, which removes each watcher node in the collection.
That effectively removes each watcher node in the organization.


### -------------------------- Example 3 --------------------------
```
Get-CsWatcherNodeConfiguration | Where-Object {$_.TestUsers -contains "sip:kenmyer@litwareinc.com"} | Remove-CsWatcherNodeConfiguration
```

In Example 3, all the watcher nodes that include the user sip:kenmyer@litwareinc.com as a test user are removed.
To carry out this task, the command first calls the `Get-CsWatcherNodeConfiguration` cmdlet in order to return a collection of all the watcher nodes currently in use.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where the TestUsers property includes (-contains) the user sip:kenmyer@litwareinc.com.
That filtered collection is then piped to the `Remove-CsWatcherNodeConfiguration` cmdlet, which removes each item in the filtered collection.


## PARAMETERS

### -Identity
Fully qualified domain name of the pool that has been assigned the watcher node being deleted.
For example:

`-Identity "atl-cs-001.litwareinc.com"`

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsWatcherNodeConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsWatcherNodeConfiguration` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsWatcherNodeConfiguration](Get-CsWatcherNodeConfiguration.md)

[New-CsWatcherNodeConfiguration](New-CsWatcherNodeConfiguration.md)

[Set-CsWatcherNodeConfiguration](Set-CsWatcherNodeConfiguration.md)

[Test-CsWatcherNodeConfiguration](Test-CsWatcherNodeConfiguration.md)

