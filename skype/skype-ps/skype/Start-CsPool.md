---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Start-CsPool
schema: 2.0.0
---

# Start-CsPool

## SYNOPSIS
Use the `Start-CsPool` cmdlet to start a Skype for Business Server pool.
A pool is a set of servers, configured identically, that work together to provide services for a common group of users.

## SYNTAX

```
Start-CsPool [-PoolFqdn] <Fqdn> [-Confirm] [-Force] [-QuorumLossRecovery] [-SkipRoutingGroup <String[]>]
 [-SkipServer <String[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Start-CsPool -PoolFqdn "atl-cs-001.litwareinc.com" -SkipRoutingGroup "bef5fa3b-3c97-4af0-abe7-611deee7616c"
```

This example starts the `"atl-cs-001.litwareinc.com"` pool and skips one routing group specified by its GUID.


## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool being started.
For example: `-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuorumLossRecovery
If true ($True), user data is reloaded from the backup store for any routing groups currently in quorum loss.
(A quorum loss occurs when neither a database nor its replicas are available.) The default is false ($False.)

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipRoutingGroup
Specifies one or more routing groups by GUID to skip during startup.
Use this parameter if one or more of the routing groups are having problems getting placed on servers.

Note that some of the users included in the skipped routing groups might not be able to sign in, or will have limited functionality.

For example, to specify a single routing group use the following syntax: `-SkipRoutingGroup "bef5fa3b-3c97-4af0-abe7-611deee7616c"`.
To specify more than one routing group use the syntax: `-SkipRoutingGroup "bef5fa3b-3c97-4af0-abe7-611deee7616c","cid4de2-3d86-3be9-bcf8-700fesi3923q"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipServer
Specifies one or more servers to skip during startup.
Use this parameter if one or more of the front end servers cannot be started.
Note that there is a minimum number of servers required for the pool to be functional.
The cmdlet will check for those conditions while trying to implement this parameter.

For example, to specify a single server use the following syntax: `-SkipServer "AtlServerOne"`.
To specify more than one server use the syntax: `-SkipServer "AtlServerOne","AtlServerTwo"`

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS

[Backup-CsPool](Backup-CsPool.md)

[Get-CsPool](Get-CsPool.md)

