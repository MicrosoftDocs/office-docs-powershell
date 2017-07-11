---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsWatcherNodeConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Removes an existing collection of watcher node configuration settings.
Watcher nodes are computers that periodically use System Center Operations Manager and Microsoft Lync Server 2013 Preview synthetic transactions to verify that Lync Server components are working as expected.

Below Content Applies To: Skype for Business Server 2015

Removes an existing collection of watcher node configuration settings.
Watcher nodes are computers that periodically use System Center Operations Manager and Skype for Business Server 2015 synthetic transactions to verify that Skype for Business Server 2015 components are working as expected.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsWatcherNodeConfiguration [-Identity] <XdsGlobalRelativeIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

If you are using Microsoft System Center Operations Manager to monitor Lync Server 2013 Preview then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Lync Server is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

If you later decide to decommission a watcher node you can do so by using the Remove-CsWatcherNodeConfiguration cmdlet.
Alternatively, you can temporarily disable (and then later re-enable) a watcher node by using the Set-CsWatcherNodeConfiguration cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsWatcherNodeConfiguration"}

Lync Server Control Panel: The functions carried out by the Remove-CsWatcherNodeConfiguration cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server 2015 then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Skype for Business Server 2015 is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

If you later decide to decommission a watcher node you can do so by using the Remove-CsWatcherNodeConfiguration cmdlet.
Alternatively, you can temporarily disable (and then later re-enable) a watcher node by using the Set-CsWatcherNodeConfiguration cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsWatcherNodeConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the watcher node configuration settings applied to the pool atl-cs-001.litwareinc.com.

Remove-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the watcher node configuration settings applied to the pool atl-cs-001.litwareinc.com.

Remove-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 removes all the watcher nodes configured for use in the organization.
To do this, the command first uses Get-CsWatcherNodeConfiguration to return a collection of all the watcher nodes.
This collection is then piped to the Remove-CsWatcherNodeConfiguration cmdlet, which removes each watcher node in the collection.
That effectively removes each watcher node in the organization.

Get-CsWatcherNodeConfiguration | Remove-CsWatcherNodeConfiguration

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 removes all the watcher nodes configured for use in the organization.
To do this, the command first uses the Get-CsWatcherNodeConfiguration cmdlet to return a collection of all the watcher nodes.
This collection is then piped to the Remove-CsWatcherNodeConfiguration cmdlet, which removes each watcher node in the collection.
That effectively removes each watcher node in the organization.

Get-CsWatcherNodeConfiguration | Remove-CsWatcherNodeConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the watcher nodes that include the user sip:kenmyer@litwareinc.com as a test user are removed.
To carry out this task, the command first calls Get-CsWatcherNodeConfiguration in order to return a collection of all the watcher nodes currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the TestUsers property includes (-contains) the user sip:kenmyer@litwareinc.com.
That filtered collection is then piped to Remove-CsWatcherNodeConfiguration, which removes each item in the filtered collection.

Get-CsWatcherNodeConfiguration | Where-Object {$_.TestUsers -contains "sip:kenmyer@litwareinc.com"} | Remove-CsWatcherNodeConfiguration

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the watcher nodes that include the user sip:kenmyer@litwareinc.com as a test user are removed.
To carry out this task, the command first calls the Get-CsWatcherNodeConfiguration cmdlet in order to return a collection of all the watcher nodes currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the TestUsers property includes (-contains) the user sip:kenmyer@litwareinc.com.
That filtered collection is then piped to the Remove-CsWatcherNodeConfiguration cmdlet, which removes each item in the filtered collection.

Get-CsWatcherNodeConfiguration | Where-Object {$_.TestUsers -contains "sip:kenmyer@litwareinc.com"} | Remove-CsWatcherNodeConfiguration

## PARAMETERS

### -Identity
Fully qualified domain name of the pool that has been assigned the watcher node being deleted.
For example:

-Identity "atl-cs-001.litwareinc.com"

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Remove-CsWatcherNodeConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

###  
The Remove-CsWatcherNodeConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## OUTPUTS

###  
None.
Instead, Remove-CsWatcherNodeConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

###  
None.
Instead, the Remove-CsWatcherNodeConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsWatcherNodeConfiguration]()

[New-CsWatcherNodeConfiguration]()

[Set-CsWatcherNodeConfiguration]()

[Test-CsWatcherNodeConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/599c6d58-da3d-4f0b-bc1f-22ac3e33ec7f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/599c6d58-da3d-4f0b-bc1f-22ac3e33ec7f(OCS.16).aspx)

