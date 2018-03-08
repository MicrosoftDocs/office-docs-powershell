---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPFeature

## SYNOPSIS
Returns all activated or a specific activated feature

## SYNTAX 

### 
```powershell
Get-PnPFeature [-Includes <String[]>]
               [-Identity <FeaturePipeBind>]
               [-Scope <FeatureScope>]
               [-Web <WebPipeBind>]
               [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPFeature
```

This will return all activated web scoped features

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPFeature -Scope Site
```

This will return all activated site scoped features

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPFeature -Identity fb689d0e-eb99-4f13-beb3-86692fd39f22
```

This will return a specific activated web scoped feature

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPFeature -Identity fb689d0e-eb99-4f13-beb3-86692fd39f22 -Scope Site
```

This will return a specific activated site scoped feature

## PARAMETERS

### -Identity
The feature ID or name to query for, Querying by name is not supported in version 15 of the Client Side Object Model

```yaml
Type: FeaturePipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Scope
The scope of the feature. Defaults to Web.

```yaml
Type: FeatureScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### List<Microsoft.SharePoint.Client.Feature>

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)