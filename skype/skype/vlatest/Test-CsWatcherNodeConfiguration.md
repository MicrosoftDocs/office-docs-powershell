---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsWatcherNodeConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Verifies the watcher node configuration settings in use in your organization.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Microsoft Lync Server 2013 Preview synthetic transactions to verify that Lync Server components are working as expected.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Verifies the watcher node configuration settings in use in your organization.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server 2015 synthetic transactions to verify that Skype for Business Server 2015 components are working as expected.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Test-CsWatcherNodeConfiguration [-FileName <String>] [-ReadCredentialsFromCurrentUserStore]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

If you are using Microsoft System Center Operations Manager to monitor Lync Server 2013 Preview then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Lync Server is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

The Test-CsWatcherNodeConfiguration cmdlet provides a way for you to verify that a watcher node has been correctly configured and is assigned to a valid Lync Server 2013 Preview pool.
Note that Test-CsWatcherNodeConfiguration must be run on the watcher node itself; the cmdlet cannot be run against remote computers.

Lync Server Control Panel: The functions carried out by the Test-CsWatcherNodeConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server 2015 then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Skype for Business Server 2015 is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

The Test-CsWatcherNodeConfiguration cmdlet provides a way for you to verify that a watcher node has been correctly configured and is assigned to a valid Skype for Business Server 2015 pool.
Note that the Test-CsWatcherNodeConfiguration cmdlet must be run on the watcher node itself; the cmdlet cannot be run against remote computers.

Skype for Business Server Control Panel: The functions carried out by the Test-CsWatcherNodeConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 verifies the configuration settings for each watcher node in use in the organization.

Test-CsWatcherNodeConfiguration

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 verifies the configuration settings for each watcher node in use in the organization.

Test-CsWatcherNodeConfiguration

## PARAMETERS

### -FileName
Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

-Report "C:\Logs\WatcherNode.html"

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

### -ReadCredentialsFromCurrentUserStore
**Below Content Applies To:** Lync Server 2013

When present, instructs the test-CsWatcherNodeConfiguratioin cmdlet to retrieve the user credentials from the user's credentials store.
By default, Test-CsWatcherNodeConfiguration looks for credentials in the network service account's credentials store.



**Below Content Applies To:** Skype for Business Server 2015

When present, instructs the Test-CsWatcherNodeConfiguration cmdlet to retrieve the user credentials from the user's credentials store.
By default, the Test-CsWatcherNodeConfiguration cmdlet looks for credentials in the network service account's credentials store.



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
Test-CsWatcherNodeConfiguration does not accept pipelined input.

###  
None.
The Test-CsWatcherNodeConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsWatcherNodeConfiguration returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsWatcherNodeConfiguration cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Get-CsWatcherNodeConfiguration]()

[New-CsWatcherNodeConfiguration]()

[Remove-CsWatcherNodeConfiguration]()

[Set-CsWatcherNodeConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/085507a1-17e8-4dfa-aa6a-062620584335(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/085507a1-17e8-4dfa-aa6a-062620584335(OCS.16).aspx)

