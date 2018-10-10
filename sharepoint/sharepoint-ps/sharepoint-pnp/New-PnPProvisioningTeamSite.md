---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# New-PnPProvisioningTeamSite

## SYNOPSIS
Creates a team site object

## SYNTAX 

```powershell
New-PnPProvisioningTeamSite -Alias <String>
                            -Title <String>
                            [-Description <String>]
                            [-DisplayName <String>]
                            [-Classification <String>]
                            [-Public [<SwitchParameter>]]
                            [-HubSite [<SwitchParameter>]]
                            [-TemplateIds <String[]>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$site = New-PnPProvisioningTeamSite -Alias "MyTeamSite" -Title "My Team Site"
```

Creates a new team site object with the specified variables

## PARAMETERS

### -Alias


```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Classification


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DisplayName


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -HubSite


```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Public


```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TemplateIds


```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title


```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)