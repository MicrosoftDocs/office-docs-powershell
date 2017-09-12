---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Receive-SPServiceApplicationConnectionInfo

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Configures this farm to receive service information from another farm.



## SYNTAX

```
Receive-SPServiceApplicationConnectionInfo [-FarmUrl] <Uri> [-AssignmentCollection <SPAssignmentCollection>]
 [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
The Receive-SPServiceApplicationConnectionInfo cmdlet retrieves the list of service applications published by another farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>Receive-SPServiceApplicationConnectionInfo -FarmUrl http://FarmB/topology/topology.svc
```

This example retreives a list of service applications published by a given farm.

The FarmURL parameter can be obtained by the Get-SPTopologyServiceApplication cmdlet.

### ------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>Receive-SPServiceApplicationConnectionInfo -FarmUrl http://FarmB/topology/topology.svc
```

This example retreives a list of service applications published by a given farm.

The FarmURL parameter can be obtained by the Get-SPTopologyServiceApplication cmdlet.

## PARAMETERS

### -FarmUrl
```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Filter
```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

