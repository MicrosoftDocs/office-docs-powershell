---
external help file: 
applicable: SharePoint Server 2016
schema: 2.0.0
---

# Set-SPServer

## SYNOPSIS
{{Fill in the Synopsis}}


## SYNTAX

```
Set-SPServer [-Identity] <SPServerPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Role <SPServerRole>] [-Status <SPObjectStatus>] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### --------------------EXAMPLE---------------------
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
Applicable: SharePoint Server 2016

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
Applicable: SharePoint Server 2016

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
Applicable: SharePoint Server 2016

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
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServerPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
