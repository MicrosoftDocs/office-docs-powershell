---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPoolBackupRelationship

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the backup pool associated with a Microsoft Lync Server 2013 Preview pool.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the backup pool associated with a Skype for Business Server 2015 pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Get-CsPoolBackupRelationship -PoolFqdn <Fqdn> [-Force] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Get-CsPoolBackupRelationship cmdlet returns the fully qualified domain name of the backup pool associated with a Registar pool.
Note that this is read-only information: there is no corresponding Set-CsPoolBackupRelationship cmdlet that lets you use Windows PowerShell to create a backup association.
Instead, backup pools must be assigned using Lync Server Topology Builder.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPoolBackupRelationship"}

Lync Server Control Panel: The functions carried out by the Get-CsPoolBackupRelationship cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Get-CsPoolBackupRelationship cmdlet returns the fully qualified domain name of the backup pool associated with a Registrar pool.
Note that this is read-only information: there is no corresponding Set-CsPoolBackupRelationship cmdlet that lets you use the Windows PowerShell command-line interface to create a backup association.
Instead, backup pools must be assigned using Skype for Business Server 2015 Topology Builder.

Skype for Business Server Control Panel: The functions carried out by the Get-CsPoolBackupRelationship cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example returns information about the backup relationship assigned to the pool atl-cs-001.litwareinc.com.

Get-CsPoolBackupRelationship -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example returns information about the backup relationship assigned to the pool atl-cs-001.litwareinc.com.

Get-CsPoolBackupRelationship -PoolFqdn "atl-cs-001.litwareinc.com"

## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool whose backup relationship is being checked.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"

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

### -LocalStore
Retrieves the backup relationship data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Get-CsPoolBackupRelationship does not accept pipelined input.

###  
None.
The Get-CsPoolBackupRelationship cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsPoolBackupRelationship returns instances of the Microsoft.Rtc.Management.Hadr.BackupService.BackupRelation object.

###  
The Get-CsPoolBackupRelationship cmdlet returns instances of the Microsoft.Rtc.Management.Hadr.BackupService.BackupRelation object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/230bbb04-b4cb-410f-8284-00740558655d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/230bbb04-b4cb-410f-8284-00740558655d(OCS.16).aspx)

