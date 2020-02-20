---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpapplicationcustomizer
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Get-PnPApplicationCustomizer

## SYNOPSIS
Returns all SharePoint Framework client side extension application customizers

## SYNTAX 

### Custom Action Id
```powershell
Get-PnPApplicationCustomizer [-Identity <GuidPipeBind>]
                             [-Scope <CustomActionScope>]
                             [-ThrowExceptionIfCustomActionNotFound [<SwitchParameter>]]
                             [-Web <WebPipeBind>]
                             [-Connection <SPOnlineConnection>]
```

### 
```powershell
Get-PnPApplicationCustomizer [-Includes <String[]>]
                             [-Scope <CustomActionScope>]
                             [-ThrowExceptionIfCustomActionNotFound [<SwitchParameter>]]
                             [-Web <WebPipeBind>]
                             [-Connection <SPOnlineConnection>]
```

### Client Side Component Id
```powershell
Get-PnPApplicationCustomizer -ClientSideComponentId <GuidPipeBind>
                             [-Scope <CustomActionScope>]
                             [-ThrowExceptionIfCustomActionNotFound [<SwitchParameter>]]
                             [-Web <WebPipeBind>]
                             [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns all SharePoint Framework client side extension application customizers registered on the current web and/or site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPApplicationCustomizer
```

Returns the custom action representing the SharePoint Framework client side extension registrations registered on the current site collection and web.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPApplicationCustomizer -Identity aa66f67e-46c0-4474-8a82-42bf467d07f2
```

Returns the custom action representing the SharePoint Framework client side extension registration with the id 'aa66f67e-46c0-4474-8a82-42bf467d07f2'.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPApplicationCustomizer -ClientSideComponentId aa66f67e-46c0-4474-8a82-42bf467d07f2 -Scope Web
```

Returns the custom action(s) being registered for a SharePoint Framework solution having the id 'aa66f67e-46c0-4474-8a82-42bf467d07f2' in its manifest from the current web.

## PARAMETERS

### -ClientSideComponentId
The Client Side Component Id of the SharePoint Framework client side extension application customizer found in the manifest for which existing custom action(s) should be removed

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: Client Side Component Id

Required: True
Position: Named
Accept pipeline input: False
```

### -Identity
Identity of the SharePoint Framework client side extension application customizer to return. Omit to return all SharePoint Frameworkclient side extension application customizer.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: Custom Action Id

Required: False
Position: Named
Accept pipeline input: False
```

### -Includes
Specify properties to include when retrieving objects from the server.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Scope
Scope of the SharePoint Framework client side extension application customizer, either Web, Site or All to return both (all is the default)

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: CustomActionScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ThrowExceptionIfCustomActionNotFound
Switch parameter if an exception should be thrown if the requested SharePoint Frameworkclient side extension application customizer does not exist (true) or if omitted, nothing will be returned in case the SharePoint Framework client side extension application customizer does not exist

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)