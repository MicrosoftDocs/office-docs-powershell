---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Add-PnPSiteClassification

## SYNOPSIS
Adds one ore more site classification values to the list of possible values. Requires a connection to the Microsoft Graph.

## SYNTAX 

```powershell
Add-PnPSiteClassification -Classifications <String>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Connect-PnPOnline -Scopes "Directory.ReadWrite.All"
Add-PnPSiteClassification -Classifications "Top Secret"
```

Adds the "Top Secret" classification to the already existing classification values.

### ------------------EXAMPLE 2------------------
```powershell
Connect-PnPOnline -Scopes "Directory.ReadWrite.All"
Add-PnPSiteClassification -Classifications "Top Secret","HBI"
```

Adds the "Top Secret" and the "For Your Eyes Only" classification to the already existing classification values.

## PARAMETERS

### -Classifications


```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)