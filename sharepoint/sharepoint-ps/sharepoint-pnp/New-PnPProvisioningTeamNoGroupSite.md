---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# New-PnPProvisioningTeamNoGroupSite

## SYNOPSIS
Creates a team site without an Office 365 group object

## SYNTAX 

```powershell
New-PnPProvisioningTeamNoGroupSite -Url <String>
                                   -Title <String>
                                   -TimeZoneId <UInt32>
                                   [-Language <UInt32>]
                                   [-Owner <String>]
                                   [-Description <String>]
                                   [-HubSite [<SwitchParameter>]]
                                   [-TemplateIds <String[]>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$site = New-PnPProvisioningTeamNoGroupSite -Alias "MyTeamSite" -Title "My Team Site"
```

Creates a new team site object with the specified variables

## PARAMETERS

### -Description


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

### -Language


```yaml
Type: UInt32
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Owner


```yaml
Type: String
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

### -TimeZoneId


```yaml
Type: UInt32
Parameter Sets: (All)

Required: True
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

### -Url


```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)