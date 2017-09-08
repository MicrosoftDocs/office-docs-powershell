---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPServer

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

```
Set-SPServer [-Identity] <SPServerPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Role <SPServerRole>] [-Status <SPObjectStatus>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

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

### -Identity
{{Fill Identity Description}}

```yaml
Type: SPServerPipeBind
Parameter Sets: (All)
Aliases: Address

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Role
{{Fill Role Description}}

```yaml
Type: SPServerRole
Parameter Sets: (All)
Aliases: 
Accepted values: Application, ApplicationWithSearch, Custom, DistributedCache, Search, SingleServerFarm, WebFrontEnd, WebFrontEndWithDistributedCache

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
{{Fill Status Description}}

```yaml
Type: SPObjectStatus
Parameter Sets: (All)
Aliases: 
Accepted values: Online, Disabled, Offline, Unprovisioning, Provisioning, Upgrading, Patching

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServerPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

