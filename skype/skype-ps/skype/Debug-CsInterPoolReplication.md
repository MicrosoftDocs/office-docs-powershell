---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Debug-CsInterPoolReplication
schema: 2.0.0
---

# Debug-CsInterPoolReplication


## SYNOPSIS
Verifies that replication is working between a Registrar pool and its assigned backup pool.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Debug-CsInterPoolReplication -PoolFqdn <Fqdn> [-BackupModule <BackupModules>] [-Force] [-Confirm]
 [-DatabaseCommandTimeoutInSeconds <Int32>] [-ResyncSignatureMismatchItems] [-SuppressMultiMasterDetection]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server each Registrar pool can be associated with a backup pool.
The backup pool maintains a copy of all the data stored on the primary pool.
Should the primary pool become unavailable then users of that pool can automatically be "failed over" to the backup pool.
This enables those users to continue to use Skype for Business Server even though their home pool is not available.
The Debug-CsInterPoolReplication cmdlet is used to compare the data stores on a primary pool and its backup pool, and thus verify that replication between the two pools is working as expected.

Note that this command will fail if the pool being tested has not been assigned a backup pool.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Debug-CsInterPoolReplication"}`

The functions carried out by the Debug-CsInterPoolReplication cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Debug-CsInterPoolReplication -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 verifies the full replication status between the pool atl-cs-001.litwareinc.com and its previously-assigned backup pool.

### -------------------------- Example 2 --------------------------
```
Debug-CsInterPoolReplication -PoolFqdn "atl-cs-001.litwareinc.com" -BackupModule DataConf
```

In Example 2, only the replication of data conferencing data is verified between the pool atl-cs-001.litwareinc.com and its previously-assigned backup pool.


## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the primary pool being tested.
For example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupModule
Enables administrators to specify the data store to be verified.
Allowed values are:

* All
* CentralMgmt
* PresenceFocus
* DataConf

The default value is All.

```yaml
Type: BackupModules
Parameter Sets: (All)
Aliases: 
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

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCommandTimeoutInSeconds
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResyncSignatureMismatchItems
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressMultiMasterDetection
When included in the command, Debug-CsInterPoolReplication will not verify whether or not the pool is part of a multi-master replication configuration before beginning its verification checks.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

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
Debug-CsInterPoolReplication does not accept pipelined data.

## OUTPUTS

###  String

## NOTES

## RELATED LINKS
