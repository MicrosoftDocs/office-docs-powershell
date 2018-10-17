---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# New-PnPProvisioningCommunicationSite

## SYNOPSIS
Creates a communication site object

## SYNTAX 

```powershell
New-PnPProvisioningCommunicationSite -Url <String>
                                     -Title <String>
                                     [-Language <UInt32>]
                                     [-Owner <String>]
                                     [-Description <String>]
                                     [-Classification <String>]
                                     [-SiteDesignId <String>]
                                     [-HubSite [<SwitchParameter>]]
                                     [-AllowFileSharingForGuestUsers [<SwitchParameter>]]
                                     [-TemplateIds <String[]>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$site = New-PnPProvisioningCommunicationSite -Url "/sites/mycommunicationsite" -Title "My Team Site"
```

Creates a new communication site object with the specified variables

## PARAMETERS

### -AllowFileSharingForGuestUsers


```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
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

### -SiteDesignId


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