---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Disable-PnPFeature

## SYNOPSIS
Disables a feature

## SYNTAX 

```powershell
Disable-PnPFeature -Identity <GuidPipeBind>
                   [-Force [<SwitchParameter>]]
                   [-Scope <FeatureScope>]
                   [-Web <WebPipeBind>]
                   [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Deactives a feature that was active on a site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disable-PnPFeature -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe
```

This will disable the feature with the id "99a00f6e-fb81-4dc7-8eac-e09c6f9132fe"

### ------------------EXAMPLE 2------------------
```powershell
Disable-PnPFeature -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe -Force
```

This will disable the feature with the id "99a00f6e-fb81-4dc7-8eac-e09c6f9132fe" with force.

### ------------------EXAMPLE 3------------------
```powershell
Disable-PnPFeature -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe -Scope Web
```

This will disable the feature with the id "99a00f6e-fb81-4dc7-8eac-e09c6f9132fe" with the web scope.

## PARAMETERS

### -Force
Specifies whether to continue if an error occurs when deactivating the feature.

```yaml
Type: SwitchParameter
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The id of the feature to disable.

```yaml
Type: GuidPipeBind
Parameter Sets: __AllParameterSets

Required: True
Position: 0
Accept pipeline input: False
```

### -Scope
Specify the scope of the feature to deactivate, either Web or Site. Defaults to Web.

```yaml
Type: FeatureScope
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

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)