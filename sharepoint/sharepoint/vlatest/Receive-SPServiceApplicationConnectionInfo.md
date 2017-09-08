---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Receive-SPServiceApplicationConnectionInfo

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Receive-SPServiceApplicationConnectionInfo [-FarmUrl] <Uri> [-AssignmentCollection <SPAssignmentCollection>]
 [-Filter <String>]
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
@{Text=}

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
@{Text=}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Filter
@{Text=}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

