---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# New-PnPProvisioningTeamNoGroupSubSite

## SYNOPSIS
Creates a team site subsite with no Office 365 group object

## SYNTAX 

```powershell
New-PnPProvisioningTeamNoGroupSubSite -Url <String>
                                      -Title <String>
                                      -TimeZoneId <UInt32>
                                      [-Language <UInt32>]
                                      [-Description <String>]
                                      [-TemplateIds <String[]>]
                                      [-QuickLaunchDisabled [<SwitchParameter>]]
                                      [-UseDifferentPermissionsFromParentSite [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$site = New-PnPProvisioningTeamNoGroupSubSite -Url "MyTeamSubsite" -Title "My Team Site" -TimeZoneId 4
```

Creates a new team site subsite object with the specified variables

## PARAMETERS

### -Description


```yaml
Type: String
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

### -QuickLaunchDisabled


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

### -UseDifferentPermissionsFromParentSite


```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)