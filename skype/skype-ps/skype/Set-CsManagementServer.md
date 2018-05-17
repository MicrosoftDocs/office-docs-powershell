---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsManagementServer
schema: 2.0.0
---

# Set-CsManagementServer

## SYNOPSIS
Modifies the replication port used by the Skype for Business Server Central Management service.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsManagementServer [[-Identity] <XdsGlobalRelativeIdentity>] [-ReplicationServicePort <UInt16>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Central Management service is responsible for replicating data between the Central Management store and computers running Skype for Business Server services or server roles.
The Central Management service runs on a single Front End pool (or a single Standard Edition server) and facilitates replication throughout the Skype for Business Server infrastructure.

The `Set-CsManagementServer` cmdlet enables you to specify the port that the Central Management service uses for replication.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsManagementServer -Identity "ManagementServer:atl-cs-001.litwareinc.com" -ReplicationServicePort 5076
```

The command shown in Example 1 connects to the Central Management service with the Identity ManagementServer:atl-cs-001.litwareinc.com and sets the replication service port to port 5076.


## PARAMETERS

### -Identity
Unique identifier for the Central Management service.
For example: `-Identity "ManagementServer:atl-cs-001.litwareinc.com"`.

Note that you can leave off the prefix "ManagementServer:" when specifying a Central Management Server.
For example: `-Identity "atl-cs-001.litwareinc.com"`.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationServicePort
Port number for the replication port used by the Central Management service.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Set-CsManagementServer` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsManagementServer` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayManagementServer object.

## NOTES

## RELATED LINKS

[Get-CsService](Get-CsService.md)

[Move-CsManagementServer](Move-CsManagementServer.md)

